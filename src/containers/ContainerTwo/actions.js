import gql from 'graphql-tag';

export const getCities = gql`
  query GetCities {
    cities @client
  }
`;

export const addCityQuery = gql`
  mutation addCity($item: Object) {
    addCity(item: $item) @client
  }
`;
