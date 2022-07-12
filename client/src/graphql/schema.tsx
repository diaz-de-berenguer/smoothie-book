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
  addRating: Smoothie;
  createSmoothie: Smoothie;
  deleteSmoothie: Smoothie;
  resetData: Scalars['Boolean'];
};

export type MutationAddRatingArgs = {
  smoothieId: Scalars['ID'];
  value: Scalars['Int'];
};

export type MutationCreateSmoothieArgs = {
  input: NewSmoothie;
};

export type MutationDeleteSmoothieArgs = {
  smoothieId: Scalars['ID'];
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
  getSmoothies: SmoothieConnection;
};

export type QueryGetSmoothieArgs = {
  id: Scalars['ID'];
};

export type QueryGetSmoothiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Rating = {
  __typename?: 'Rating';
  count: Scalars['Int'];
  value?: Maybe<Scalars['Int']>;
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
  rating?: Maybe<Rating>;
  recipe?: Maybe<Recipe>;
};

export type SmoothieConnection = {
  __typename?: 'SmoothieConnection';
  nodes?: Maybe<Array<Maybe<Smoothie>>>;
  totalCount: Scalars['Int'];
};

export type DeleteSmoothieMutationVariables = Exact<{
  smoothieId: Scalars['ID'];
}>;

export type DeleteSmoothieMutation = {
  __typename?: 'Mutation';
  deleteSmoothie: { __typename?: 'Smoothie'; id: string };
};

export type AddRatingMutationVariables = Exact<{
  smoothieId: Scalars['ID'];
  value: Scalars['Int'];
}>;

export type AddRatingMutation = {
  __typename?: 'Mutation';
  addRating: { __typename?: 'Smoothie'; id: string };
};

export type ResetDataMutationVariables = Exact<{ [key: string]: never }>;

export type ResetDataMutation = { __typename?: 'Mutation'; resetData: boolean };

export type GetSmoothiesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;

export type GetSmoothiesQuery = {
  __typename?: 'Query';
  getSmoothies: {
    __typename?: 'SmoothieConnection';
    totalCount: number;
    nodes?: Array<{
      __typename?: 'Smoothie';
      id: string;
      name: string;
      rating?: { __typename?: 'Rating'; count: number; value?: number | null } | null;
    } | null> | null;
  };
};

export type CreateSmoothieMutationVariables = Exact<{
  input: NewSmoothie;
}>;

export type CreateSmoothieMutation = {
  __typename?: 'Mutation';
  createSmoothie: { __typename?: 'Smoothie'; id: string; name: string };
};

export type GetSmoothieQueryVariables = Exact<{
  getSmoothieId: Scalars['ID'];
}>;

export type GetSmoothieQuery = {
  __typename?: 'Query';
  getSmoothie?: {
    __typename?: 'Smoothie';
    id: string;
    name: string;
    recipe?: {
      __typename?: 'Recipe';
      id: string;
      instructions?: string | null;
      ingredients?: Array<{
        __typename?: 'Ingredient';
        id: string;
        name: string;
        quantity: string;
      } | null> | null;
    } | null;
    rating?: { __typename?: 'Rating'; count: number; value?: number | null } | null;
  } | null;
};

export const DeleteSmoothieDocument = gql`
  mutation DeleteSmoothie($smoothieId: ID!) {
    deleteSmoothie(smoothieId: $smoothieId) {
      id
    }
  }
`;
export type DeleteSmoothieMutationFn = Apollo.MutationFunction<
  DeleteSmoothieMutation,
  DeleteSmoothieMutationVariables
>;

/**
 * __useDeleteSmoothieMutation__
 *
 * To run a mutation, you first call `useDeleteSmoothieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSmoothieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSmoothieMutation, { data, loading, error }] = useDeleteSmoothieMutation({
 *   variables: {
 *      smoothieId: // value for 'smoothieId'
 *   },
 * });
 */
export function useDeleteSmoothieMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteSmoothieMutation, DeleteSmoothieMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteSmoothieMutation, DeleteSmoothieMutationVariables>(
    DeleteSmoothieDocument,
    options
  );
}
export type DeleteSmoothieMutationHookResult = ReturnType<typeof useDeleteSmoothieMutation>;
export type DeleteSmoothieMutationResult = Apollo.MutationResult<DeleteSmoothieMutation>;
export type DeleteSmoothieMutationOptions = Apollo.BaseMutationOptions<
  DeleteSmoothieMutation,
  DeleteSmoothieMutationVariables
>;
export const AddRatingDocument = gql`
  mutation AddRating($smoothieId: ID!, $value: Int!) {
    addRating(smoothieId: $smoothieId, value: $value) {
      id
    }
  }
`;
export type AddRatingMutationFn = Apollo.MutationFunction<
  AddRatingMutation,
  AddRatingMutationVariables
>;

/**
 * __useAddRatingMutation__
 *
 * To run a mutation, you first call `useAddRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRatingMutation, { data, loading, error }] = useAddRatingMutation({
 *   variables: {
 *      smoothieId: // value for 'smoothieId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useAddRatingMutation(
  baseOptions?: Apollo.MutationHookOptions<AddRatingMutation, AddRatingMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddRatingMutation, AddRatingMutationVariables>(
    AddRatingDocument,
    options
  );
}
export type AddRatingMutationHookResult = ReturnType<typeof useAddRatingMutation>;
export type AddRatingMutationResult = Apollo.MutationResult<AddRatingMutation>;
export type AddRatingMutationOptions = Apollo.BaseMutationOptions<
  AddRatingMutation,
  AddRatingMutationVariables
>;
export const ResetDataDocument = gql`
  mutation ResetData {
    resetData
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
export const GetSmoothiesDocument = gql`
  query GetSmoothies($limit: Int, $page: Int) {
    getSmoothies(limit: $limit, page: $page) {
      totalCount
      nodes {
        id
        name
        rating {
          count
          value
        }
      }
    }
  }
`;

/**
 * __useGetSmoothiesQuery__
 *
 * To run a query within a React component, call `useGetSmoothiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSmoothiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSmoothiesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetSmoothiesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSmoothiesQuery, GetSmoothiesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSmoothiesQuery, GetSmoothiesQueryVariables>(
    GetSmoothiesDocument,
    options
  );
}
export function useGetSmoothiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSmoothiesQuery, GetSmoothiesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSmoothiesQuery, GetSmoothiesQueryVariables>(
    GetSmoothiesDocument,
    options
  );
}
export type GetSmoothiesQueryHookResult = ReturnType<typeof useGetSmoothiesQuery>;
export type GetSmoothiesLazyQueryHookResult = ReturnType<typeof useGetSmoothiesLazyQuery>;
export type GetSmoothiesQueryResult = Apollo.QueryResult<
  GetSmoothiesQuery,
  GetSmoothiesQueryVariables
>;
export const CreateSmoothieDocument = gql`
  mutation CreateSmoothie($input: NewSmoothie!) {
    createSmoothie(input: $input) {
      id
      name
    }
  }
`;
export type CreateSmoothieMutationFn = Apollo.MutationFunction<
  CreateSmoothieMutation,
  CreateSmoothieMutationVariables
>;

/**
 * __useCreateSmoothieMutation__
 *
 * To run a mutation, you first call `useCreateSmoothieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSmoothieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSmoothieMutation, { data, loading, error }] = useCreateSmoothieMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSmoothieMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSmoothieMutation, CreateSmoothieMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSmoothieMutation, CreateSmoothieMutationVariables>(
    CreateSmoothieDocument,
    options
  );
}
export type CreateSmoothieMutationHookResult = ReturnType<typeof useCreateSmoothieMutation>;
export type CreateSmoothieMutationResult = Apollo.MutationResult<CreateSmoothieMutation>;
export type CreateSmoothieMutationOptions = Apollo.BaseMutationOptions<
  CreateSmoothieMutation,
  CreateSmoothieMutationVariables
>;
export const GetSmoothieDocument = gql`
  query GetSmoothie($getSmoothieId: ID!) {
    getSmoothie(id: $getSmoothieId) {
      id
      name
      recipe {
        id
        instructions
        ingredients {
          id
          name
          quantity
        }
      }
      rating {
        count
        value
      }
    }
  }
`;

/**
 * __useGetSmoothieQuery__
 *
 * To run a query within a React component, call `useGetSmoothieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSmoothieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSmoothieQuery({
 *   variables: {
 *      getSmoothieId: // value for 'getSmoothieId'
 *   },
 * });
 */
export function useGetSmoothieQuery(
  baseOptions: Apollo.QueryHookOptions<GetSmoothieQuery, GetSmoothieQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSmoothieQuery, GetSmoothieQueryVariables>(GetSmoothieDocument, options);
}
export function useGetSmoothieLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSmoothieQuery, GetSmoothieQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSmoothieQuery, GetSmoothieQueryVariables>(
    GetSmoothieDocument,
    options
  );
}
export type GetSmoothieQueryHookResult = ReturnType<typeof useGetSmoothieQuery>;
export type GetSmoothieLazyQueryHookResult = ReturnType<typeof useGetSmoothieLazyQuery>;
export type GetSmoothieQueryResult = Apollo.QueryResult<
  GetSmoothieQuery,
  GetSmoothieQueryVariables
>;
export const namedOperations = {
  Query: {
    GetSmoothies: 'GetSmoothies',
    GetSmoothie: 'GetSmoothie',
  },
  Mutation: {
    DeleteSmoothie: 'DeleteSmoothie',
    AddRating: 'AddRating',
    ResetData: 'ResetData',
    CreateSmoothie: 'CreateSmoothie',
  },
};
