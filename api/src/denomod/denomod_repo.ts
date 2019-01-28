import { EntityRepository, Repository } from "typeorm";
import { Denomod } from "./denomod_entity";

@EntityRepository(Denomod)
export class DenomodRepo extends Repository<Denomod> {
  findByScopeAndRepo(scope: string, repo: string) {
    return this.findOne({ scope, repo });
  }
}
