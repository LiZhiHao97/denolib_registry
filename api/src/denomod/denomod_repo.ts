import { EntityRepository, Repository, Like } from "typeorm";
import { Denomod } from "./denomod_entity";

@EntityRepository(Denomod)
export class DenomodRepo extends Repository<Denomod> {
  findByScopeAndRepo(scope: string, repo: string) {
    return this.findOne({ scope, repo });
  }
  fuzzyMatchByWords(words: string[]) {
    const likeQueryString = `%${words.join("%")}%`;
    return this.find({
      where: [
        {
          repo: Like(likeQueryString)
        },
        {
          name: Like(likeQueryString)
        },
        {
          keywords: Like(likeQueryString)
        }
      ]
    });
  }
}
