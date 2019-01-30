import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidUrlException extends HttpException {
  constructor() {
    super("Invalid URL", HttpStatus.INTERNAL_SERVER_ERROR);
  }
}