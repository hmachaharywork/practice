import React from 'react';
import { DrawerNavigator, navigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FoodTabs, EcomTabs, TableTabs } from './TabNav';
import SideDrawer from './SideDrawer';


const routes = {

  FoodOrdering: {
    screen: FoodTabs,
    navigationOptions: {
      drawerLabel: 'Food Ordering',
      drawerIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="food" size={24} color={tintColor} />
      ),
    }
  },
  Ecom: {
    screen: EcomTabs,
    navigationOptions: {
      drawerLabel: 'Ecommerce',
      drawerIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="shopping" size={24} color={tintColor} />
      ),
    }
  },
  Table: {
    screen: TableTabs,
    navigationOptions: {
      drawerLabel: 'Table Reservation',
      drawerIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="table-large" size={24} color={tintColor} />
      ),
    }
  }
};


const options = {
  initialRouteName: 'FoodOrdering',
  contentComponent: SideDrawer,
  contentOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
    activeBackgroundColor: '#ffffff',
  }
};

export const AppNavigator = DrawerNavigator(routes, options);
