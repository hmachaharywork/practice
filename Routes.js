import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { LaptopHome, CameraHome, MobileHome, Orders, Profile, Notification } from './main';

const HomeStack = StackNavigator({
  Home: {
    screen: LaptopHome //or CameraHome or MobileHome //Render according to active drawerNavigator.
  }
});

const OrdersStack = StackNavigator({
  Order: {
    screen: Orders,
  }
});

const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
  }
});

const NotificationStack = StackNavigator({
  Notification: {
    screen: Notification,
  }
});

const HomeTab = TabNavigator({
  HomeTab: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={24} color={tintColor} />,
    },
  },
  OrderTab: {
    screen: OrdersStack,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="cart-arrow-down" size={24} color={tintColor} />
    },
  },
  ProfileTab: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={24} color={tintColor} />
    },
  },
  NotificationTab: {
    screen: NotificationStack,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="bell" size={24} color={tintColor} />
    },
  }
}, {
initialRouteName: 'HomeTab',
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
});


export const AppNavigator = DrawerNavigator({
  Laptop: {
    screen: HomeTab,
    navigationOptions: {
      drawerLabel: 'Laptop',
    }
  },
  Camera: {
    screen: HomeTab,
    navigationOptions: {
      drawerLabel: 'Camera',
    }
  },
  Mobile: {
    screen: HomeTab,
    navigationOptions: {
      drawerLabel: 'Mobile',
      drawerIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="table-large" size={24} color={tintColor} />
      ),
    }
  }
}, {
  initialRouteName: 'Laptop',
  contentOptions: {
    activeTintColor: '#4DD1A5',
    inactiveTintColor: '#AAADAC',
    activeBackgroundColor: '#ffffff',
  }
});
