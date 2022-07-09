import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  id: Scalars['ID'];
  name: Scalars['String'];
  quantity: Scalars['String'];
  recipeId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  clearData: Scalars['Boolean'];
  createSmoothie: Smoothie;
};

export type MutationCreateSmoothieArgs = {
  input: NewSmoothie;
};

export type NewIngredient = {
  name: Scalars['String'];
  quantity: Scalars['String'];
};

export type NewSmoothie = {
  ingredients: Array<InputMaybe<NewIngredient>>;
  instructions?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getSmoothie?: Maybe<Smoothie>;
  getSmoothies: Array<Maybe<Smoothie>>;
};

export type QueryGetSmoothieArgs = {
  id: Scalars['ID'];
};

export type QueryGetSmoothiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  instructions?: Maybe<Scalars['String']>;
  smoothieId: Scalars['ID'];
};

export type Smoothie = {
  __typename?: 'Smoothie';
  id: Scalars['ID'];
  name: Scalars['String'];
  recipe?: Maybe<Recipe>;
};

export type ClearDataMutationVariables = Exact<{ [key: string]: never }>;

export type ClearDataMutation = { __typename?: 'Mutation'; clearData: boolean };

export type ResetDataMutationVariables = Exact<{
  input: NewSmoothie;
}>;

export type ResetDataMutation = {
  __typename?: 'Mutation';
  createSmoothie: { __typename?: 'Smoothie'; id: string };
};

export const ClearDataDocument = gql`
  mutation ClearData {
    clearData
  }
`;
export type ClearDataMutationFn = Apollo.MutationFunction<
  ClearDataMutation,
  ClearDataMutationVariables
>;

/**
 * __useClearDataMutation__
 *
 * To run a mutation, you first call `useClearDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearDataMutation, { data, loading, error }] = useClearDataMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearDataMutation(
  baseOptions?: Apollo.MutationHookOptions<ClearDataMutation, ClearDataMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ClearDataMutation, ClearDataMutationVariables>(
    ClearDataDocument,
    options
  );
}
export type ClearDataMutationHookResult = ReturnType<typeof useClearDataMutation>;
export type ClearDataMutationResult = Apollo.MutationResult<ClearDataMutation>;
export type ClearDataMutationOptions = Apollo.BaseMutationOptions<
  ClearDataMutation,
  ClearDataMutationVariables
>;
export const ResetDataDocument = gql`
  mutation ResetData($input: NewSmoothie!) {
    createSmoothie(input: $input) {
      id
    }
  }
`;
export type ResetDataMutationFn = Apollo.MutationFunction<
  ResetDataMutation,
  ResetDataMutationVariables
>;

/**
 * __useResetDataMutation__
 *
 * To run a mutation, you first call `useResetDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetDataMutation, { data, loading, error }] = useResetDataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetDataMutation(
  baseOptions?: Apollo.MutationHookOptions<ResetDataMutation, ResetDataMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ResetDataMutation, ResetDataMutationVariables>(
    ResetDataDocument,
    options
  );
}
export type ResetDataMutationHookResult = ReturnType<typeof useResetDataMutation>;
export type ResetDataMutationResult = Apollo.MutationResult<ResetDataMutation>;
export type ResetDataMutationOptions = Apollo.BaseMutationOptions<
  ResetDataMutation,
  ResetDataMutationVariables
>;
export const namedOperations = {
  Mutation: {
    ClearData: 'ClearData',
    ResetData: 'ResetData',
  },
};
