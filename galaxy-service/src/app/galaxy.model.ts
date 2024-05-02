// galaxy.model.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Galaxy {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  distance: number;

  @Field()
  mass: number;

  @Field()
  diameter: number;

  @Field()
  numberOfStars: number;

  @Field()
  averageStarMass: number;

  @Field()
  averageStarTemperature: number;

  @Field()
  gasPercentage: number;

  @Field()
  dustPercentage: number;

  @Field()
  metallicity: number;

  @Field()
  shape: string;

  @Field({ nullable: true })
  armCount?: number;

  @Field()
  barPresence: boolean;

  @Field({ nullable: true })
  bulgeSize?: string;

  @Field({ nullable: true })
  coreSize?: string;

  @Field()
  haloPresence: boolean;

  @Field()
  ringsPresence: boolean;

  @Field()
  mainSequenceStars: number;

  @Field()
  redGiants: number;

  @Field()
  whiteDwarfs: number;

  @Field()
  neutronStars: number;

  @Field()
  blackHoles: number;

  @Field()
  hasActiveGalacticNucleus: boolean;

  @Field()
  hasSupermassiveBlackHole: boolean;

  @Field()
  hasQuasar: boolean;

  @Field()
  hasGammaRayBurst: boolean;

  @Field()
  hasMolecularClouds: boolean;

  @Field()
  description: string;
}
