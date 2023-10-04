import React, { useState, useEffect } from 'react';

import { Pagination, Container, Stack } from '@mui/material';

import mainService from '../../services/main.service';
import useLoader from '../../hook/useLoader';
import addNotification from '../../utils/addNotification';
import { NotificationType } from '../../config';
import SWCards from './SWCards';
import Filter from './Filter';
import { PeopleModel } from '../../models';
import SWModal from './SWModal';

const MainPage: React.FC = () => {
  const { hideLoader, showLoader } = useLoader();

  const [count, setCount] = useState<number>(1);
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>('init');
  const [open, setOpen] = React.useState(false);
  const [selectedPeople, setSelectedPeople] = useState<PeopleModel>({} as PeopleModel);

  useEffect(() => {
    setFilter('');
  }, []);

  useEffect(() => {
    if (page !== 0) {
      loadData();
    }
  }, [page]);

  useEffect(() => {
    if (filter !== 'init') {
      if (page === 1) {
        loadData();
      } else {
        setPage(1);
      }
    }
  }, [filter]);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    if (value !== page) {
      setPage(value);
    }
  };

  const loadData = () => {
    showLoader();
    mainService
      .getData(page, filter)
      .then((resp) => {
        setData(resp.results);
        const pageCount = Math.ceil(resp.count / 10);
        if (pageCount !== count) {
          setCount(pageCount);
          setPage(1);
        }
      })
      .catch((e) =>
        addNotification({
          content: e,
          type: NotificationType.ERROR,
        })
      )
      .finally(() => hideLoader());
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const onCardClick = (name: string) => {
    const findedPeople = data.find((people) => people.name === name);
    setSelectedPeople(findedPeople);
    handleOpen();
  };

  return (
    <>
      <Filter filterValue={filter} setFilterValue={setFilter} />
      <Container maxWidth="lg">
        <SWCards data={data} page={page} onCardClick={onCardClick} />
      </Container>
      <Stack
        sx={{
          position: 'sticky',
          bottom: 0,
          width: '100%',
          background: '#3c3f54',
        }}
        alignItems="center"
        justifyContent="center"
        mt={6}
        p={2}
      >
        <Pagination color="primary" count={count} page={page} onChange={handleChangePage} />
      </Stack>
      <SWModal selectedPeople={selectedPeople} open={open} handleClose={handleClose} />
    </>
  );
};

export default MainPage;
