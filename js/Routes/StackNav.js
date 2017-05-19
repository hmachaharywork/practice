import React from 'react';
import { StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import FoodHome from '../components/FoodOrdering/HomePage/index';
import hahah from '../components/FoodOrdering/HomePage/haha';
import EcomHome from '../components/Ecommerce/HomePage/index';
import Orders from '../components/Orders/index';
import Profile from '../components/Profile/index';
import Notification from '../components/Notification/index';
import TableReservation from '../components/TableReservation/index';
import bestInTown from '../components/FoodOrdering/BestInTown/bestInTown';
import RestaurantHome from '../components/FoodOrdering/RestaurantHome/index';
import restHome from '../components/FoodOrdering/RestaurantHome/index';

const DrawerIcon = ({ navigation }) => {
  return (
    <MaterialCommunityIcons
      name="menu"
      size={24}
      color="#000"
      style={{ paddingLeft: 20 }}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  )
};

const BestInTownStack = StackNavigator({
  Best: {
    screen: bestInTown,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    })
  },
  RestroHome: {
    screen: restHome,
    navigationOptions: ({navigation}) => ({
      //title: `${navigation.state.params.restName}`,
    })
  }
});


export const FoodStack = StackNavigator({
  Home: {
    screen: FoodHome,
    navigationOptions: (props) => ({
      initialRouteName: 'Home',
      headerLeft: (<DrawerIcon {...props} /> ),
      headerMode: 'screen',
    }),
  },
  BestInTown: {
    screen: bestInTown,
  },
});

export const EcomStack = StackNavigator({
  EcomHome: {
    screen: EcomHome,
    navigationOptions: (props) => ({
      initialRouteName: 'EcomHome',
      headerLeft: (<DrawerIcon {...props} /> ),
      headerMode: 'screen',
    }),
  }
});

export const OrdersStack = StackNavigator({
  Orders: {
    screen: Orders,
    navigationOptions: (props) => ({
      headerLeft: (<DrawerIcon {...props} /> ),
      headerMode: 'screen',
    }),
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: (props) => ({
      headerLeft: (<DrawerIcon {...props} /> ),
      headerMode: 'screen',
    }),
  }
});

export const NotificationStack = StackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: (props) => ({
      headerLeft: (<DrawerIcon {...props} /> ),
      headerMode: 'screen',
    }),
  }
});

export const TableStack = StackNavigator({
  Table: {
    screen: TableReservation,
    navigationOptions: (props) => ({
      initialRouteName: 'Table',
      headerLeft: (<DrawerIcon {...props} /> ),
      headerMode: 'screen',
    }),
  }
});
