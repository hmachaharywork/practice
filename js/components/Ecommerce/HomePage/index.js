import React, { Component } from 'react';
import { View, Text } from 'react-native';



class EcomHome extends Component {
  static navigationOptions = {
    title: 'CityOra Shop'
  }

  render() {
    const {state} = this.props.navigation;
    return(
      <View>
        <Text>{state.routeName}</Text>
        <Text>
          This is Ecom Home page.
        </Text>
      </View>
    );
  }
}

export default EcomHome;
