// galaxy.interface.ts
export interface GalaxyAttributes {
  name: string;
  type: string;
  distance: number; // in light-years
  mass: number; // in solar masses
  diameter: number; // in light-years

  // Physical Properties
  numberOfStars: number;
  averageStarMass: number; // in solar masses
  averageStarTemperature: number; // in Kelvin
  gasPercentage: number; // percentage of gas in the galaxy
  dustPercentage: number; // percentage of dust in the galaxy
  metallicity: number; // metallicity of the galaxy

  // Structural Properties
  shape: string; // spiral, elliptical, irregular, etc.
  armCount?: number; // number of spiral arms (if applicable)
  barPresence: boolean; // whether the galaxy has a central bar
  bulgeSize?: string; // size of the bulge (small, medium, large)
  coreSize?: string; // size of the core (compact, diffuse)
  haloPresence: boolean; // whether the galaxy has a stellar halo
  ringsPresence: boolean; // whether the galaxy has rings

  // Stellar Population
  mainSequenceStars: number; // number of stars in the main sequence
  redGiants: number; // number of red giant stars
  whiteDwarfs: number; // number of white dwarf stars
  neutronStars: number; // number of neutron stars
  blackHoles: number; // number of black holes

  // Other Properties
  hasActiveGalacticNucleus: boolean; // whether the galaxy has an active galactic nucleus
  hasSupermassiveBlackHole: boolean; // whether the galaxy has a supermassive black hole
  hasQuasar: boolean; // whether the galaxy hosts a quasar
  hasGammaRayBurst: boolean; // whether the galaxy has gamma-ray burst events
  hasMolecularClouds: boolean; // whether the galaxy contains molecular clouds

  // Description
  description: string; // a brief description of the galaxy
}
