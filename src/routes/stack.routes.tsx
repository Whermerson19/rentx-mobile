import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedules } from "../screens/Schedules";
import { ScheduleDetails } from "../screens/ScheduleDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="Schedules" component={Schedules} />
        <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
        <Stack.Screen
          name="SchedulingComplete"
          component={SchedulingComplete}
        />
        <Stack.Screen name="MyCars" component={MyCars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
