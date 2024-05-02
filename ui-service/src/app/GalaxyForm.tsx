import React, { useState } from 'react';

interface GalaxyAttributes {
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


interface Props {
  onSubmit: (data: Partial<GalaxyAttributes>) => void;
}

const GalaxyForm: React.FC<Props> = ({ onSubmit }) => {
  const initialFormData: Partial<GalaxyAttributes> = {
    name: '',
    type: '',
    distance: 0,
    mass: 0,
    diameter: 0,
    numberOfStars: 0,
    averageStarMass: 0,
    averageStarTemperature: 0,
    gasPercentage: 0,
    dustPercentage: 0,
    metallicity: 0,
    shape: '',
    barPresence: false,
    haloPresence: false,
    ringsPresence: false,
    mainSequenceStars: 0,
    redGiants: 0,
    whiteDwarfs: 0,
    neutronStars: 0,
    blackHoles: 0,
    hasActiveGalacticNucleus: false,
    hasSupermassiveBlackHole: false,
    hasQuasar: false,
    hasGammaRayBurst: false,
    hasMolecularClouds: false,
    description: '',
  };

  const [formData, setFormData] = useState<Partial<GalaxyAttributes>>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'barPresence' || name === 'haloPresence' || name === 'ringsPresence' || name === 'hasActiveGalacticNucleus' || name === 'hasSupermassiveBlackHole' || name === 'hasQuasar' || name === 'hasGammaRayBurst' || name === 'hasMolecularClouds' ? (value === 'true') : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="distance">Distance (light-years):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={formData.distance}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add other form fields for each property of GalaxyAttributes */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default GalaxyForm;
