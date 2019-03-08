import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { View, Text, FlatList } from 'react-native';
import getCountries from './actions';
import Loading from '../../components/Loading';

const ContainerOne = props => {
  const {
    dataCountries: { loading },
    dataCountries: { countries },
  } = props;

  if (loading) return <Loading />;

  return (
    <View style={{ padding: 20, maxHeight: 350 }}>
      <FlatList
        data={countries}
        keyExtractor={item => item.code}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

ContainerOne.propTypes = {
  dataCountries: PropTypes.shape({
    loading: PropTypes.bool,
    countries: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }),
};

ContainerOne.defaultProps = {
  dataCountries: {
    loading: false,
    countries: [],
  },
};

export default compose(graphql(getCountries, { name: 'dataCountries' }))(ContainerOne);
