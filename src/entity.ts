import { Column, PrimaryColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "sample_table",
})
export class SampleEntity {
  @PrimaryGeneratedColumn("uuid")
  id?: number;

  @Column()
  name?: string;
}
