import { Controller, Get, Req, HttpService, Res } from "@nestjs/common";
import { DenomodService } from "../denomod/denomod_service";
import { Request, Response } from "express";
import { InvalidUrlException } from "../common/http_error";

/**
 * Group 1: scope
 * Group 2: repo
 * Group 3: @
 * Group 4: rest
 * Group 5: expension
 */
const MATCHER = /^\/proxy\/([^\/]+)\/([^\/@]+)(@)?([^\.]*)\.(.*)/;

@Controller("proxy")
export class ProxyController {
  constructor(
    private readonly denomodService: DenomodService,
    private readonly httpService: HttpService
  ) {}

  @Get("*")
  async download(@Req() req: Request, @Res() res: Response) {
    if (!MATCHER.test(req.url)) {
      throw new InvalidUrlException();
    }
    const [, scope, repo, versionSpecified, rest, expension] = MATCHER.exec(
      req.url
    );
    if (!scope || !repo) {
      throw new InvalidUrlException();
    }
    this.denomodService.updateWeeplyDownloads(scope, repo);
    try {
      const githubRes = await this.httpService
        .get(
          `https://raw.githubusercontent.com/${scope}/${repo}/${
            versionSpecified ? "" : "master"
          }${rest}.${expension}`
        )
        .toPromise();
      res.contentType("text/plain").send(githubRes.data);
    } catch (err) {
      if (expension === "js") {
        // TODO: https://github.com/denoland/registry/issues/39
      }
    }
  }
}
