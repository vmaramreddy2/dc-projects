import { Module } from '@nestjs/common';
import { Neo4jModule } from 'nest-neo4j';
import { Neo4jService } from './neo4j.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'neo4j+s',
      host: '12b61a96.databases.neo4j.io',
      port: 7687,
      username: 'neo4j',
      password: '17uWR8IsF6Vh6cMdO6CslExXGDp1yNkHihLw7NrisCE'
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: Neo4jService,
      useFactory: () => ({
        scheme: process.env.NEO4J_SCHEME || 'bolt',
        host: process.env.NEO4J_HOST || 'localhost',
        port: parseInt(process.env.NEO4J_PORT, 10) || 7687,
        username: process.env.NEO4J_USERNAME || 'neo4j',
        password: process.env.NEO4J_PASSWORD || 'password',
      }),
    },
    AppService],
})
export class AppModule {}
