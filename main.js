import React from 'react';
import { View, Text } from 'react-native';

export const LaptopHome = () => {
    return(
      <View style={{flex: 1, backgroundColor: '#e3e3e3'}}>
        <Text>
          This is laptop Home Page.
        </Text>
      </View>
    );
}

export const CameraHome = () => {
  return(
    <View style={{flex: 1, backgroundColor: 'skyBlue'}} >
      <Text>This is Camera Home Page</Text>
    </View>
  )
}

export const MobileHome = () => {
  return(
    <View style={{flex: 1}}>
      <Text>This is a Mobile Home page</Text>
    </View>
  );
}

export const Orders = () => {
  return(
    <View style={{flex: 1}}>
      <Text>Orders history details</Text>
    </View>
  );
}

export const Profile = () => {
  return(
    <View style={{flex: 1}}>
      <Text>Profile details</Text>
    </View>
  );
}

export const Notification = () => {
  return(
    <View style={{flex: 1}}>
      <Text>List of Notification</Text>
    </View>
  );
}
