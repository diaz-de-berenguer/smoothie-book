import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { GetSmoothieQuery, useGetSmoothieQuery } from '../../../graphql/schema';
import React, { useContext, useEffect, useState } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PageContext } from '../../../components/Page';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

interface ShowSmoothieProps {}

const SubTitle = styled(Typography)({
  marginTop: '2rem',
  marginBottom: '1rem',
});

const ShowSmoothie: React.FC<ShowSmoothieProps> = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { setError, setLoading } = useContext(PageContext);
  const [smoothie, setSmoothie] = useState<GetSmoothieQuery['getSmoothie']>();
  const { loading } = useGetSmoothieQuery({
    variables: { getSmoothieId: id },
    onError: (err) => setError(err),
    onCompleted: (data) => setSmoothie(data.getSmoothie),
  });

  useEffect(() => {
    setLoading(loading);
  }, [setLoading, loading]);

  return (
    <>
      {smoothie && (
        <Box
          sx={{
            paddingBottom: '3rem',
          }}
        >
          <Grid container direction={['column-reverse', 'row']}>
            <Grid item sm={6} xs={12}>
              <Typography variant="h4">{smoothie?.name}</Typography>
            </Grid>
            <Grid item sm={6} xs={12} style={{ textAlign: 'right', paddingTop: '1rem' }}>
              <Button variant="text" onClick={() => navigate('/')}>
                <ArrowBackIosIcon fontSize="small" />
                All Smoothies
              </Button>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <SubTitle variant="h5">Ingredients</SubTitle>
            </Grid>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: '20%' }}>Qty.</TableCell>
                  <TableCell>Ingredient</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {smoothie.recipe?.ingredients?.map((smoothie) => {
                  return (
                    smoothie && (
                      <TableRow
                        key={smoothie.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell style={{ width: '20%' }} component="th" scope="row">
                          {smoothie.quantity}
                        </TableCell>
                        <TableCell>{smoothie.name}</TableCell>
                      </TableRow>
                    )
                  );
                })}
              </TableBody>
            </Table>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <SubTitle variant="h5">Instructions</SubTitle>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">{smoothie.recipe?.instructions}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ShowSmoothie;
