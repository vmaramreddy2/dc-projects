import { Injectable } from '@nestjs/common';
import { Neo4jService } from 'nest-neo4j';
import { GalaxyAttributes } from './galaxy.interface';

@Injectable()
export class GalaxyService {
  constructor(private readonly neo4jService: Neo4jService) {}

  async create(galaxyData: Partial<GalaxyAttributes>): Promise<GalaxyAttributes> {
    const query = `
      CREATE (galaxy:Galaxy ${this.createPropertiesString(galaxyData)})
      RETURN galaxy
    `;
    const result = await this.neo4jService.write(query);
    return result.records[0].get('galaxy').properties;
  }

  async findAll(): Promise<GalaxyAttributes[]> {
    const query = `
      MATCH (galaxy:Galaxy)
      RETURN galaxy
    `;
    const result = await this.neo4jService.read(query);
    return result.records.map(record => record.get('galaxy').properties);
  }

  async findOne(id: string): Promise<GalaxyAttributes> {
    const query = `
      MATCH (galaxy:Galaxy {id: $id})
      RETURN galaxy
    `;
    const result = await this.neo4jService.read(query, { id });
    return result.records[0].get('galaxy').properties;
  }

  async update(id: string, galaxyData: Partial<GalaxyAttributes>): Promise<GalaxyAttributes> {
    const query = `
      MATCH (galaxy:Galaxy {id: $id})
      SET galaxy += ${this.createPropertiesString(galaxyData)}
      RETURN galaxy
    `;
    const result = await this.neo4jService.write(query, { id });
    return result.records[0].get('galaxy').properties;
  }

  async delete(id: string): Promise<void> {
    const query = `
      MATCH (galaxy:Galaxy {id: $id})
      DELETE galaxy
    `;
    await this.neo4jService.write(query, { id });
  }

  private createPropertiesString(data: Partial<GalaxyAttributes>): string {
    return `{${Object.entries(data).map(([key, value]) => `${key}: '${value}'`).join(', ')}}`;
  }
}
