import { Controller, Get, Param } from "@nestjs/common";
import { BadgeService } from "./badge_service";

@Controller("badge")
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Get(":user/:repo")
  async makeBadge(@Param("user") user: string, @Param("repo") repo: string) {
    await this.badgeService.checkDenolib(user, repo);
    return this.badgeService.getBadge(user, repo);
  }
}
