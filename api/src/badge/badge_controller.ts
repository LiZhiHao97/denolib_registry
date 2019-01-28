import { Controller, Get, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { badgeConfig, DENOLIB_JSON_URL } from "../common/tool";
import { DenomodService } from "../denomod/denomod_service";

@Controller("badge")
export class BadgeController {
  constructor(private readonly denomodService: DenomodService) {}

  @Get(":scope/:repo")
  async generate(
    @Param("scope") scope: string,
    @Param("repo") repo: string,
    @Res() res: Response
  ) {
    this.denomodService.tryToRegister(scope, repo);
    res.redirect(
      `https://img.shields.io/badge/dynamic/json.svg?label=${
        badgeConfig.label
      }&query=${badgeConfig.query}&style=${
        badgeConfig.style
      }&url=${DENOLIB_JSON_URL(scope, repo)}`
    );
  }
}
