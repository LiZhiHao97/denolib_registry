import { Controller, Get, Post, Param, Query } from "@nestjs/common";
import { DenomodService } from "./denomod_service";
import { ElasticsearchService } from "@nestjs/elasticsearch";

@Controller("module")
export class DenomodController {
  constructor(
    private readonly denomodService: DenomodService,
    private readonly elasticsearchService: ElasticsearchService
  ) {}

  @Post("total")
  total() {
    return this.denomodService.total();
  }

  @Get("search")
  search(@Query("q") q: string) {
    return this.elasticsearchService.search({
      index: "deno",
      type: "module",
      q
    });
  }

  @Get(":scope/:repo")
  findOne(@Param("scope") scope: string, @Param("repo") repo: string) {
    return this.denomodService.findOne(scope, repo);
  }
}
