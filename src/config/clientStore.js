import { withClientState } from 'apollo-link-state';
import storeTwo from '../containers/ContainerTwo/store';

/**
 * Local Data Stores
 */
const stores = [storeTwo];

/**
 * Map the Mutation handlers and Default Values of our local state to
 * the Apollo cache.
 */
const createClientStore = cache => {
  // Merge all defaults
  let defaults = {};
  let mutations = {};

  stores.map(store => {
    defaults = { ...defaults, ...store.defaults };
    mutations = { ...mutations, ...store.mutations };
    return store;
  });

  // Construct the Client State with the given mutations and defaults
  return withClientState({
    cache,
    defaults,
    resolvers: {
      /*
       * These mutations relate to graphql mutations with the @client decorator
       * by function name.
       */
      Mutation: mutations,
    },
  });
};

/**
 * Export
 */

export default createClientStore;
