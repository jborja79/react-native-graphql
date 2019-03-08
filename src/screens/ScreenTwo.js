import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import ContainerTwo from '../containers/ContainerTwo';

const ScreenTwo = ({ navigation, paramOne }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text>{paramOne}</Text>
      <ContainerTwo />
      <Button title="Go to Home!" onPress={() => navigate('ScreenOne')} />
    </View>
  );
};

ScreenTwo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  paramOne: PropTypes.string,
};

ScreenTwo.defaultProps = {
  navigation: {
    navigate: () => {},
  },
  paramOne: '',
};

export default ScreenTwo;
