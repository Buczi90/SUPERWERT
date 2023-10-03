import React from 'react';
import { CircularProgress, Box } from '@mui/material';

import useLoader from '../../hook/useLoader';

const loaderBoxStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.85)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  justifyContent: 'center',
  alignItems: 'center',
};

const Loader: React.FC = () => {
  const { isLoading } = useLoader();

  return (
    <>
      {isLoading ? (
        <Box sx={loaderBoxStyle}>
          <CircularProgress />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
