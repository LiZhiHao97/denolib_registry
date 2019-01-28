import { Entity, Column } from "typeorm";
import { CommonEntity } from "../common/common_entity";

@Entity()
export class Denomod extends CommonEntity {
  @Column()
  scope: string;
  @Column()
  repo: string;
  @Column("simple-array")
  /** Maintain an array of length 52, showing weekly downloads for one year. */
  weeklyDownloads: number[];

  @Column("simple-array")
  author: string[];
  @Column()
  name: string;
  @Column()
  version: string;
  @Column("simple-array")
  keywords: string[];
  @Column()
  entry: string;
}
