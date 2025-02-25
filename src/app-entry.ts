import { DataSource } from "typeorm";
import { SampleEntity } from "./entity";

export const handler = () => {
  const ds = new DataSource({
    type: "mysql",
    host: "sample",
    port: 3306,
    username: "sample_user",
    password: "sample_password",
    database: "sample_db",
    synchronize: true,
    logging: ["schema", "error"],
    entities: [SampleEntity],
    migrations: [],
    subscribers: [],
  });

  ds.initialize();

  const repo = ds.getRepository(SampleEntity);

  repo.save({ name: "sample" });

  return;
};
