import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import ContainerOne from '../containers/ContainerOne';

const ScreenOne = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <ContainerOne />
      <Button
        title="Go to screen two"
        onPress={() => navigate('ScreenTwo', { paramOne: 'test string' })}
      />
    </View>
  );
};

ScreenOne.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

ScreenOne.defaultProps = {
  navigation: {
    navigate: () => {},
  },
};

export default ScreenOne;
