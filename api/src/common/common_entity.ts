import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class CommonEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @UpdateDateColumn()
  updateAt: Date;
  @CreateDateColumn()
  createAt: Date;
}
