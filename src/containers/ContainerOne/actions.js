import gql from 'graphql-tag';

const getCountries = gql`
  {
    countries {
      name
      code
    }
  }
`;

export default getCountries;
