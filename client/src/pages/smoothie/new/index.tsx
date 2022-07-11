import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import {
  GetSmoothiesDocument,
  NewSmoothie as NewSmoothieInput,
  useCreateSmoothieMutation,
} from '../../../graphql/schema';
import { useContext, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { PageContext } from '../../../components/Page';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

interface NewSmoothieProps {}

const FormInput = styled(Box)({
  paddingTop: '2rem',
  paddingBottom: '1rem',
});

const NewSmoothie: React.FC<NewSmoothieProps> = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<NewSmoothieInput['name']>('');
  const [instructions, setInstructions] = useState<NewSmoothieInput['instructions']>('');
  const [ingredients, setIngredients] = useState<NewSmoothieInput['ingredients']>([]);
  const { setLoading, setError } = useContext(PageContext);

  const [submit, { loading }] = useCreateSmoothieMutation({
    onError: (err) => setError(err),
    onCompleted: (data) => navigate(`/smoothie/${data.createSmoothie.id}`),
    awaitRefetchQueries: true,
    refetchQueries: [{ query: GetSmoothiesDocument, variables: { page: 1, limit: 8 } }],
  });

  function filterIngredients(
    ingredients: NewSmoothieInput['ingredients']
  ): NewSmoothieInput['ingredients'] {
    return ingredients.filter((ingredient) => {
      if (!ingredient) {
        return false;
      }
      const { quantity, name } = ingredient;
      return quantity.length > 0 && name.length > 0;
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({
      variables: {
        input: {
          name,
          instructions,
          ingredients: filterIngredients(ingredients),
        },
      },
    });
  };

  const addEmptyIngredient = (amount = 1) => {
    const blankIngredients: NewSmoothieInput['ingredients'] = [];
    for (let i = 0; i < amount; i++) {
      blankIngredients.push({ name: '', quantity: '' });
    }
    setIngredients((_ingredients) => [..._ingredients, ...blankIngredients]);
  };

  const hasEmptyIngredientField = (): boolean => {
    return ingredients.some((ingredient) => {
      if (!ingredient) {
        return false;
      }
      const { quantity, name } = ingredient;
      return quantity.length === 0 && name.length === 0;
    });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleInstructionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(e.target.value);
  };

  const handleIngredientChange = (index: number, input: { name?: string; quantity?: string }) => {
    const ingredient = ingredients[index];
    const _ingredients = [...ingredients];
    _ingredients[index] = Object.assign({}, ingredient, input);
    setIngredients(_ingredients);
  };

  if (ingredients.length < 1) {
    addEmptyIngredient(2);
  }

  useEffect(() => {
    console.log('hasEmptyIngredientField', hasEmptyIngredientField());
    if (!hasEmptyIngredientField()) {
      addEmptyIngredient();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients, setIngredients]);

  useEffect(() => {
    setLoading(loading);
  }, [setLoading, loading]);

  return (
    <Box
      sx={{
        paddingBottom: '3rem',
      }}
    >
      <Grid container direction={['column-reverse', 'row']}>
        <Grid item sm={6} xs={12}>
          <Typography variant="h4">New Smoothie</Typography>
        </Grid>
        <Grid item sm={6} xs={12} style={{ textAlign: 'right', paddingTop: '1rem' }}>
          <Button variant="text" onClick={() => navigate('/')}>
            <CloseIcon fontSize="small" />
            Cancel
          </Button>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <FormInput>
              <Typography variant="h5">Smoothie</Typography>
              <TextField
                id="name"
                label="Name"
                variant="standard"
                value={name}
                onChange={handleNameChange}
              />
            </FormInput>
          </Grid>

          <FormInput>
            <Typography variant="h5">Ingredient List</Typography>
          </FormInput>
          {ingredients.map((ingredient, i) => {
            console.log('ing in map', ingredient);
            return (
              ingredient && (
                <Grid container key={i}>
                  <Grid item xs={4}>
                    <TextField
                      id="qty"
                      label="Qty."
                      variant="standard"
                      value={ingredient.quantity}
                      onChange={(e) => handleIngredientChange(i, { quantity: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="ingredient"
                      label="Ingredient"
                      variant="standard"
                      value={ingredient.name}
                      onChange={(e) => handleIngredientChange(i, { name: e.target.value })}
                    />
                  </Grid>
                </Grid>
              )
            );
          })}
          <Grid item xs={12}>
            <FormInput>
              <Typography variant="h5">Instructions</Typography>

              <TextField
                id="instructions"
                label="Instructions"
                multiline
                minRows={2}
                variant="standard"
                value={instructions}
                onChange={handleInstructionsChange}
              />
            </FormInput>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormInput>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                Save
              </Button>
            </FormInput>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default NewSmoothie;
