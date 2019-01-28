import { Injectable, HttpService } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DenomodRepo } from "./denomod_repo";
import { Denomod } from "./denomod_entity";
import { DENOLIB_JSON_URL } from "../common/tool";

@Injectable()
export class DenomodService {
  constructor(
    @InjectRepository(DenomodRepo)
    private readonly denomodRepo: DenomodRepo,
    private readonly httpService: HttpService
  ) {}

  initEntity(scope: string, repo: string) {
    const entity = new Denomod();
    entity.scope = scope;
    entity.repo = repo;
    entity.weeklyDownloads = Array(52).fill(0);

    entity.author = [];
    entity.name = "";
    entity.version = "";
    entity.keywords = [];
    entity.entry = "";
    return entity;
  }

  async tryToRegister(scope: string, repo: string) {
    let denomod = await this.denomodRepo.findByScopeAndRepo(scope, repo);
    if (denomod) {
      return;
    } else {
      try {
        const resp = await this.httpService
          .get(DENOLIB_JSON_URL(scope, repo))
          .toPromise();
        denomod = this.initEntity(scope, repo);
        for (const field in resp.data) {
          if (denomod.hasOwnProperty(field)) {
            denomod[field] = resp.data[field];
          }
        }
        this.denomodRepo.save(denomod);
      } catch (err) {
        // TODO
      }
    }
  }

  async updateWeeplyDownloads(scope: string, repo: string) {
    const denomod = await this.denomodRepo.findByScopeAndRepo(scope, repo);
    if (!denomod) {
      return;
    }
    ++denomod.weeklyDownloads[denomod.weeklyDownloads.length - 1];
    this.denomodRepo.save(denomod);
  }
}
