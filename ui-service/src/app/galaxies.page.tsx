// GalaxiesPage.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Button, Typography, Divider } from '@mui/material';
import GalaxyForm from './GalaxyForm';

interface Galaxy {
  id : string,
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
  // Add other attributes of Galaxy interface here
}

const GalaxiesPage = () => {
  const [galaxies, setGalaxies] = useState<Galaxy[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    fetchGalaxies();
  }, []);

  const fetchGalaxies = async () => {
    try {
      const response = await axios.get<Galaxy[]>('/api/galaxies');
      setGalaxies(response.data);
    } catch (error) {
      console.error('Error fetching galaxies:', error);
    }
  };

  const handleSubmit = async (galaxy: Galaxy) => {
    try {
      await axios.post('/api/galaxies', galaxy);
      fetchGalaxies();
      setShowForm(false);
    } catch (error) {
      console.error('Error creating galaxy:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Galaxies</Typography>
      <Divider />
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        {galaxies.map(galaxy => (
          <Grid item xs={12} key={galaxy.id}>
            <Typography variant="h6">{galaxy.name}</Typography>
            {/* Display other attributes of the galaxy */}
            <Button variant="outlined" color="primary" onClick={() => console.log('Edit galaxy:', galaxy)}>Edit</Button>
            <Button variant="outlined" color="secondary" onClick={() => console.log('Delete galaxy:', galaxy)}>Delete</Button>
            <Divider style={{ marginTop: 10 }} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(true)}
        style={{ marginTop: 20 }}
      >
        Add Galaxy
      </Button>
      {showForm && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h5">Add Galaxy</Typography>
          <GalaxyForm initialValues={{ name: '' }} onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default GalaxiesPage;
