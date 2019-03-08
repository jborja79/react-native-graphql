import { getCities } from './actions';
/*
  Defaults
*/

const citiesDefaults = {
  cities: [],
};

/*
  Cache Mutations
*/

export const addCity = (_obj, { item }, { cache }) => {
  const query = getCities;
  // Read the cities from the cache
  const { cities } = cache.readQuery({ query });
  // Add the item to the cities
  const updatedCities = cities.concat(item);
  // Update the cached cities
  cache.writeQuery({ query, data: { cities: updatedCities } });

  return updatedCities;
};

/*
  Store
*/

/**
 * The Store object used to construct
 * Apollo Link State's Client State
 */
const store = {
  defaults: citiesDefaults,
  mutations: {
    addCity,
  },
};

export default store;
