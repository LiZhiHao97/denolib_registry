import { Controller, Get, Param, Res, HttpService, Req } from "@nestjs/common";
import { DenomodService } from "./denomod/denomod_service";
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly denomodService: DenomodService) {}

  @Get(":scope[^badge]/:repo@:branch/*")
  download(
    @Param("scope") scope: string,
    @Param("repo") repo: string,
    @Param("branch") branch: string,
    @Param("0") rest: string,
    @Res() res: Response
  ) {
    this.denomodService.updateWeeplyDownloads(scope, repo);
    res.redirect(
      `https://raw.githubusercontent.com/${scope}/${repo}/${branch}/${rest}`
    );
  }

  @Get(":scope[^badge]/:repo/*")
  master(
    @Param("scope") scope: string,
    @Param("repo") repo: string,
    @Param("0") rest: string,
    @Res() res: Response
  ) {
    res.redirect(`/${scope}/${repo}@master/${rest}`);
  }
}
