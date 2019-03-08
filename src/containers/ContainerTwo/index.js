import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { View, Text, FlatList } from 'react-native';
import { getCities, addCityQuery } from './actions';
import ExampleForm from '../../components/ExampleForm';

const ContainerTwo = props => {
  const { dataCities, addCity } = props;

  return (
    <View style={{ padding: 20 }}>
      <ExampleForm onSave={addCity} />
      <Text>CITIES</Text>
      <View style={{ padding: 20, maxHeight: 350 }}>
        <FlatList
          data={dataCities.cities}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
};

ContainerTwo.propTypes = {
  dataCities: PropTypes.shape({
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
  addCity: PropTypes.func,
};

ContainerTwo.defaultProps = {
  dataCities: [],
  addCity: () => {},
};

export default compose(
  graphql(getCities, { name: 'dataCities' }),
  graphql(addCityQuery, { name: 'addCity' })
)(ContainerTwo);
