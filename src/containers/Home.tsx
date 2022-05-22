import { Button, Container } from '@mui/material';
import React, { useCallback } from 'react';
import { fetchAsync, getAntelopes } from '../redux/antelopes/slice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Home = (prop: any) => {
  const { data, status } = useAppSelector(getAntelopes);
  const dispatch = useAppDispatch();

  const handleFetch = useCallback(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  console.log({ data, status });

  return (
    <Container>
      <Button onClick={handleFetch}>Fetch</Button>
    </Container>
  );
};

export default Home;
