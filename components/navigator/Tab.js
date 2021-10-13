import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-dynamic-vector-icons'
import Routes from './Routes'
import { colors } from "../../styles";
//import { TabCustom } from "./TabCustom";

const Tab = createBottomTabNavigator()

export const TabNav = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: colors.secondary,
      tabBarStyle: {
        backgroundColor: colors.primary,
      },
    }}
  >
    <Tab.Screen
      name="List"
      component={Routes.List}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused,color, size}) => (
          <Icon
            name="bell"
            type="FontAwesome5"
            color={color}
            size={size}
            solid={focused}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={Routes.Map}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="compass"
            type="FontAwesome5"
            color={color}
            size={size}
            solid={focused}
          />
        )
      }}
    />
    <Tab.Screen
      name="Emergency"
      component={Routes.Emergency}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="bookmark"
            type="FontAwesome5"
            color={color}
            size={size}
            solid={focused}
          />
        )
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Routes.Profile}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => (
          <Icon
            name="user"
            type="FontAwesome5"
            color={color}
            size={size}
            solid={focused}
          />
        )
      }}
    />
  </Tab.Navigator>
)
