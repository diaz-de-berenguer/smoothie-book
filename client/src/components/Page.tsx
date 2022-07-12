import { Container, Grid, LinearProgress, Paper, Snackbar } from '@mui/material';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

import { ApolloError } from '@apollo/client';
import { styled } from '@mui/system';

interface PageProps {
  children: React.ReactNode;
}

const PagePaper = styled(Paper)(() => ({
  marginTop: '3rem',
  marginBottom: '3rem',
  minHeight: '40rem',
  padding: '2rem',
}));

const Loading = styled(LinearProgress)(() => ({
  marginTop: '3rem',
  marginBottom: '-3.45rem',
  height: '0.4rem',
}));

const Error = styled(Snackbar)(() => ({}));

interface Context {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<ApolloError | null>>;
}

export const PageContext = createContext<Context>({
  setLoading: () => {},
  setError: () => {},
});

const Page: React.FC<PageProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApolloError | null>(null);

  return (
    <PageContext.Provider value={{ setLoading, setError }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10} lg={7}>
          <Container>
            {loading && <Loading />}
            <PagePaper elevation={2}>{children}</PagePaper>
          </Container>
        </Grid>
      </Grid>
      <Error
        open={Boolean(error)}
        message={error?.message}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      />
    </PageContext.Provider>
  );
};

export default Page;
