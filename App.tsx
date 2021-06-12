import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import AppLoading from "expo-app-loading";

import { Home } from "./src/screens/Home";
import { CardDetails } from "./src/screens/CarDetails";
import { Schedules } from "./src/screens/Schedules";
import { ScheduleDetails } from "./src/screens/ScheduleDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <ScheduleDetails />
    </ThemeProvider>
  );
}
