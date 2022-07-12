import { Box, Grid, Typography } from '@mui/material';
import { GetSmoothieDocument, useAddRatingMutation } from '../../graphql/schema';

import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { styled } from '@mui/system';
import { useState } from 'react';

interface RatingProps {
  value?: number | null;
  count: number;
  updateRating?: boolean;
  smoothieId: string;
}

interface UpdateRatingProps {
  smoothieId: string;
  submitRating: (args: any) => any;
  loading: boolean;
  called: boolean;
}

const NoStar = styled(StarOutlineIcon)({
  color: 'lightgrey',
  fontSize: '1.2rem',
});
const EmptyStar = styled(StarOutlineIcon)({
  color: 'gold',
  fontSize: '1.2rem',
});
const HalfStar = styled(StarHalfIcon)({
  color: 'gold',
  fontSize: '1.2rem',
});
const Star = styled(StarIcon)({
  color: 'gold',
  fontSize: '1.2rem',
});

const UpdateRating: React.FC<UpdateRatingProps> = ({
  smoothieId,
  submitRating,
  loading,
  called,
}) => {
  const stars: Array<React.ReactNode> = [];
  const [rating, setRating] = useState(0);

  const handleClick = (i: number) => {
    if (!loading || !called) {
      submitRating({
        variables: {
          smoothieId,
          value: rating * 2,
        },
      });
    }
  };

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Grid item xs={2} onMouseOver={() => setRating(i)} onMouseLeave={() => setRating(0)}>
        <Box sx={{ cursor: called ? 'inherit' : 'pointer' }} onClick={() => handleClick(i)}>
          {rating >= i ? <Star /> : <NoStar />}
        </Box>
      </Grid>
    );
  }
  return <>{stars}</>;
};

const NoRating: React.FC = () => {
  const stars: Array<React.ReactNode> = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Grid item xs={2}>
        <NoStar />
      </Grid>
    );
  }
  return <>{stars}</>;
};

const CurrentRating: React.FC<{ value: number }> = ({ value }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const diff = value - i;
    console.log(diff);
    if (diff >= 1) {
      stars.push(
        <Grid item xs={2}>
          <Star />
        </Grid>
      );
      continue;
    } else if (diff >= 0.5) {
      stars.push(
        <Grid item xs={2}>
          <HalfStar />
        </Grid>
      );
      continue;
    } else {
      stars.push(
        <Grid item xs={2}>
          <EmptyStar />
        </Grid>
      );
    }
  }
  return <>{stars}</>;
};

const Rating: React.FC<RatingProps> = ({ smoothieId, value, count, updateRating }) => {
  const [isHovering, setIsHovering] = useState(false);

  const [submitRating, { loading, called }] = useAddRatingMutation({
    awaitRefetchQueries: true,
    refetchQueries: [{ query: GetSmoothieDocument, variables: { getSmoothieId: smoothieId } }],
  });

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // If updateRating === true, the user should be able to submit a rating when Hovering, but not
  // after a successful submission
  const shouldShowUpdateRating = updateRating && isHovering && !loading && !called;

  return (
    <Grid container onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Grid item md={6} sm={8} xs={10}>
        <Grid container columns={10}>
          {shouldShowUpdateRating ? (
            <UpdateRating
              smoothieId={smoothieId}
              submitRating={submitRating}
              loading={loading}
              called={called}
            />
          ) : count < 1 ? (
            <NoRating />
          ) : (
            <CurrentRating value={(value || 0) / 2} />
          )}
        </Grid>
      </Grid>
      <Grid item md={6} sm={4} xs={2}>
        <Typography variant="caption">
          {shouldShowUpdateRating ? 'Rate' : `${called ? 'Thanks! ' : ''}(${String(count)})`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Rating;
