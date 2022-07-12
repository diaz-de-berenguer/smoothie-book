import { Box, Button, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { GetSmoothiesQuery } from '../../graphql/schema';
import { PageContext } from '../../components/Page';
import Pagination from '@mui/material/Pagination';
import Rating from '../../components/Rating';
import Stack from '@mui/material/Stack';
import { darken } from '@mui/material/styles';
import { styled } from '@mui/system';
import { useGetSmoothiesQuery } from '../../graphql/schema';

interface HomeProps {}

const SmoothieLink = styled(Link)(
  ({ theme }) => `
  text-decoration: none;
  color: ${theme.palette.primary.main};
  :hover {
    color: ${darken(theme.palette.primary.main, 0.2)};
  }
`
);

const Item = styled(Grid)({
  paddingTop: '1rem',
  paddingBottom: '1rem',
});

const Spacer = styled(Box)({
  margin: '1rem 0',
  width: '100%',
});

const SmoothieName = styled(Typography)({
  padding: '0.5rem 0',
  display: 'inline',
});

const NewSmoothieButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button color="primary" variant="contained" onClick={() => navigate('/smoothie/new')}>
      <AddIcon />
      New Smoothie
    </Button>
  );
};

const Home: React.FC<HomeProps> = () => {
  const pageSize = 8;
  const [smoothies, setSmoothies] = useState<GetSmoothiesQuery['getSmoothies']['nodes']>();
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const { setLoading, setError } = useContext(PageContext);
  const { data, loading } = useGetSmoothiesQuery({
    variables: {
      limit: pageSize,
      page: page,
    },
    onError: (err) => setError(err),
  });

  useEffect(() => {
    if (data) {
      setSmoothies(data.getSmoothies.nodes);
      setPageCount(Math.ceil(data.getSmoothies.totalCount / pageSize));
    }
  }, [data]);

  useEffect(() => {
    setLoading(loading);
  }, [setLoading, loading]);

  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <Typography variant="h2">Smoothies</Typography>
      </Grid>
      <Grid item sm={6} xs={12} style={{ textAlign: 'right', paddingTop: '1rem' }}>
        <NewSmoothieButton />
      </Grid>
      <Spacer>
        <hr />
      </Spacer>
      <Box
        sx={{
          minHeight: `${pageSize * 4 + 2}rem`,
          width: '100%',
        }}
      >
        {smoothies &&
          smoothies.map((smoothie) => {
            return (
              smoothie && (
                <Grid container key={smoothie.id}>
                  <Item item sm={8} xs={12}>
                    <SmoothieLink to={`smoothie/${smoothie.id}`}>
                      <SmoothieName variant="h5">{smoothie.name}</SmoothieName>
                    </SmoothieLink>
                  </Item>
                  <Item item sm={4} xs={6}>
                    <Rating
                      count={smoothie.rating?.count || 0}
                      value={smoothie.rating?.value}
                      smoothieId={smoothie.id}
                    />
                  </Item>
                </Grid>
              )
            );
          })}
      </Box>

      <Stack spacing={2}>
        <Pagination
          defaultPage={page}
          count={pageCount}
          onChange={(_, nextPage) => {
            setPage(nextPage);
          }}
        />
      </Stack>
    </Grid>
  );
};

export default Home;
