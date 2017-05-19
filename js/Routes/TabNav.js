import React from 'react';
import { TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import {FoodStack, EcomStack, TableStack, OrdersStack, ProfileStack, NotificationStack } from './StackNav';


export const FoodTabs = TabNavigator({
  FoodTab: {
    screen: FoodStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={24} color={tintColor} />,
    },
  },
  Orders: {
    screen: OrdersStack,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="cart-arrow-down" size={24} color={tintColor} />
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={24} color={tintColor} />
    },
  },
  Notification: {
    screen: NotificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="bell" size={24} color={tintColor} />
    },
  },
},{
  initialRouteName: 'Orders',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
    upperCaseLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#fff',
    },
    labelStyle:{
      fontSize: 10,
      margin: 0,
    },
    indicatorStyle: {
      opacity: 0,
    },
  },
})



export const EcomTabs = TabNavigator({
  EcomTab: {
    screen: EcomStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={24} color={tintColor} />,
    },
  },
  Orders: {
    screen: OrdersStack,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="cart-arrow-down" size={24} color={tintColor} />
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={24} color={tintColor} />
    },
  },
  Notification: {
    screen: NotificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="bell" size={24} color={tintColor} />
    },
  },
}, {
  initialRouteName: 'EcomTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
    upperCaseLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#fff',
    },
    labelStyle:{
      fontSize: 10,
      margin: 0,
    },
    indicatorStyle: {
      opacity: 0,
    },
  },
})

export const TableTabs = TabNavigator({
  TableTab: {
    screen: TableStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={24} color={tintColor} />,
    },
  },
  Orders: {
    screen: OrdersStack,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="cart-arrow-down" size={24} color={tintColor} />
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={24} color={tintColor} />
    },
  },
  Notification: {
    screen: NotificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="bell" size={24} color={tintColor} />
    },
  },
}, {
  initialRouteName: 'TableTab',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
    upperCaseLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#fff',
    },
    labelStyle:{
      fontSize: 10,
      margin: 0,
    },
    indicatorStyle: {
      opacity: 0,
    },
  },
})
