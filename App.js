import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigation from './src/routes/StackNavigation';

export default function App() {
  return (
    <StackNavigation/>
  );
}