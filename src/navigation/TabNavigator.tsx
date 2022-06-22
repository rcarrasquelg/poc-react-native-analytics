import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {InfoScreen} from '../screens/InfoScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {ExampleScreen} from '../screens/ExampleScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home-outline';
              break;
            case 'InfoScreen':
              iconName = 'information-circle-outline';
              break;
            case 'ExampleScreen':
              iconName = 'information-circle-outline';
              break;
          }

          return <Icon name={iconName} color={color} size={30} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="InfoScreen"
        options={{
          title: 'Info',
        }}
        component={InfoScreen}
      />
      <Tab.Screen
        name="ExampleScreen"
        options={{
          title: 'Example',
        }}
        component={ExampleScreen}
      />
    </Tab.Navigator>
  );
};
