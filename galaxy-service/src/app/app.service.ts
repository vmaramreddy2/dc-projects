import { Injectable } from '@nestjs/common';
import { Neo4jService } from 'nest-neo4j';
import { Session } from 'neo4j-driver';
import { GalaxyAttributes } from './galaxy.interface';

@Injectable()
export class AppService {

  constructor(private readonly neo4jService: Neo4jService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async createNode(session: Session) {
    const result = await session.run(
      'CREATE (a:Person { name: $name, age: $age }) RETURN a',
      { name: 'Alice', age: 30 },
    );
    return result.records[0].get('a').properties;
  }

  async findNode(session: Session) {
    const result = await session.run(
      'MATCH (a:Person { name: $name }) RETURN a',
      { name: 'Alice' },
    );
    return result.records[0].get('a').properties;
  }

  async createOrUpdateGalaxy(galaxy: GalaxyAttributes): Promise<void> {
    const session = this.neo4jService.getDriver().session();
    try {
        await session.run(
          `
          MERGE (g:Galaxy {name: $name})
          SET g.type = $type, g.distance = $distance, g.mass = $mass, g.diameter = $diameter,
              g.numberOfStars = $numberOfStars, g.averageStarMass = $averageStarMass,
              g.averageStarTemperature = $averageStarTemperature, g.gasPercentage = $gasPercentage,
              g.dustPercentage = $dustPercentage, g.metallicity = $metallicity,
              g.shape = $shape, g.armCount = $armCount, g.barPresence = $barPresence,
              g.bulgeSize = $bulgeSize, g.coreSize = $coreSize, g.haloPresence = $haloPresence,
              g.ringsPresence = $ringsPresence, g.mainSequenceStars = $mainSequenceStars,
              g.redGiants = $redGiants, g.whiteDwarfs = $whiteDwarfs, g.neutronStars = $neutronStars,
              g.blackHoles = $blackHoles, g.hasActiveGalacticNucleus = $hasActiveGalacticNucleus,
              g.hasSupermassiveBlackHole = $hasSupermassiveBlackHole, g.hasQuasar = $hasQuasar,
              g.hasGammaRayBurst = $hasGammaRayBurst, g.hasMolecularClouds = $hasMolecularClouds,
              g.description = $description
          `,
          galaxy
        );
    } finally {
        session.close();
    }
  }
}

