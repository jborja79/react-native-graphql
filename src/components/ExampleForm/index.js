import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Button } from 'react-native';

const config = {
  texts: {
    formTitle: 'Add City',
    placeHolder: 'enter city',
    labelButton: 'Submit',
    accessibilityLabel: 'Save city',
  },
};

class ExampleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newCity: '' };
  }

  submitCity = () => {
    const { onSave } = this.props;
    const { newCity } = this.state;
    if (newCity !== '') onSave({ variables: { item: { name: newCity } } });
    this.setState({ newCity: '' });
  };

  render() {
    const { texts } = config;
    const { newCity } = this.state;

    return (
      <View>
        <Text>{texts.formTitle}</Text>
        <TextInput
          placeholder={texts.placeHolder}
          value={newCity}
          onChangeText={text => this.setState({ newCity: text })}
        />
        <Button
          onPress={this.submitCity}
          title={texts.labelButton}
          accessibilityLabel={texts.accessibilityLabel}
        />
      </View>
    );
  }
}

ExampleForm.propTypes = {
  onSave: PropTypes.func,
};

ExampleForm.defaultProps = {
  onSave: () => {},
};

export default ExampleForm;
