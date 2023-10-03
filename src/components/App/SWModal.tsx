import React, { useEffect, useState } from 'react';

import { Modal, Box, Typography } from '@mui/material';

import { PeopleModel, PlanetModel } from '../../models';
import mainService from '../../services/main.service';
import useLoader from '../../hook/useLoader';

type SWModalProps = {
  selectedPeople: PeopleModel;
  open: boolean;
  handleClose: () => void;
};

const SWModal: React.FC<SWModalProps> = ({ selectedPeople, open, handleClose }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #fff5d9',
    boxShadow: 24,
    p: 4,
  };

  const { name, height, mass, birth_year, films, homeworld } = selectedPeople;

  const [planet, setPlanet] = useState<PlanetModel>({} as PlanetModel);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    if (name) {
      showLoader();
      const parts = homeworld.split('/');
      const planetId = parseInt(parts[parts.length - 2]);

      mainService
        .getTerrain(planetId)
        .then((planetData) => {
          setPlanet(planetData);
        })
        .finally(() => {
          hideLoader();
        });
    }
  }, [selectedPeople]);

  return (
    <>
      {name && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              {name}
            </Typography>

            <Typography sx={{ mt: 2 }}>Magasság: {height}</Typography>
            <Typography sx={{ mt: 1 }}>Súly: {mass}</Typography>
            <Typography sx={{ mt: 1 }}>Született: {birth_year}</Typography>
            <Typography sx={{ mt: 1 }}>Filmben szerepel: {films.length}</Typography>
            <Typography sx={{ mt: 4 }}>Szülőföld: {planet.name}</Typography>
            <Typography sx={{ mt: 1 }}>Szülőföld terep: {planet.terrain}</Typography>
            <Typography sx={{ mt: 1 }}>Szülőföld klímája: {planet.climate}</Typography>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default SWModal;
