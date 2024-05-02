import { Injectable } from '@nestjs/common';
import neo4j, { Driver } from 'neo4j-driver';

interface Neo4jConfig {
  scheme: string;
  host: string;
  port: number;
  username: string;
  password: string;
}



@Injectable()
export class Neo4jService {
    private readonly driver: Driver;

    constructor(private readonly config: Neo4jConfig) {
      const uri = `${config.scheme}://${config.host}:${config.port}`;
      this.driver = neo4j.driver(
          uri,
          neo4j.auth.basic(this.config.username, this.config.password)
      );
    }
    getDriver(): Driver {
        return this.driver;
    }
}
