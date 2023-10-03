import React, { useEffect, useState } from 'react';
import { isNil } from 'lodash';

import { TextField, InputAdornment, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import useLoader from '../../hook/useLoader';

type FilterProps = {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

const Filter: React.FC<FilterProps> = ({ filterValue, setFilterValue }) => {
  const [searchValue, setSearchValue] = useState(filterValue);
  const { isLoading } = useLoader();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!isNil(searchValue)) setFilterValue(searchValue);
    }, 600);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  useEffect(() => {
    if (filterValue !== searchValue) {
      setSearchValue(filterValue);
    }
  }, [filterValue]);
  return (
    <Grid
      container
      sx={{ position: 'sticky', top: 0, background: '#3c3f54', zIndex: 1111, boxShadow: 3 }}
      display={'flex'}
      justifyContent="flex-end"
      p={2}
    >
      <Grid item>
        <TextField
          InputProps={{
            startAdornment: <SearchIcon color="primary" />,
            endAdornment: (
              <InputAdornment position="end" onClick={() => setSearchValue('')}>
                {searchValue ? (
                  <ClearIcon color="primary" style={{ cursor: 'pointer' }} />
                ) : (
                  <div style={{ width: 24 }} />
                )}
              </InputAdornment>
            ),
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
          }}
          placeholder={'Keresés...'}
          value={searchValue}
          variant="standard"
          disabled={isLoading}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
