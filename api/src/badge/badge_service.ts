import { Injectable, HttpService, HttpStatus } from "@nestjs/common";

const DENOLIB_JSON_URL = (user: string, repo: string) =>
  `https://raw.githubusercontent.com/${user}/${repo}/master/denolib.json`;
const config = {
  label: "DenoLib",
  query: "$.name",
  style: "flat-square"
};

@Injectable()
export class BadgeService {
  constructor(private readonly httpService: HttpService) {}

  checkDenolib(user: string, repo: string) {
    
  }

  getBadge(user: string, repo: string) {
    return this.httpService
      .post(
        `https://img.shields.io/badge/dynamic/json.svg?label=${
          config.label
        }&query=${config.query}&style=${config.style}&url=${DENOLIB_JSON_URL(
          user,
          repo
        )}`
      )
      .toPromise();
  }
}
