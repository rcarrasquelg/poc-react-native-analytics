import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {InfoScreen} from './InfoScreen';
import {ExampleScreen} from './ExampleScreen';
import {Home} from './Home';

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Home':
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
        name="Home"
        options={{
          title: 'Home',
        }}
        component={Home}
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
