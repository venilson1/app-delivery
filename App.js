import * as React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import AuthProvider from './src/contexts/AuthContext';
import StackNavigation from './src/routes/StackNavigation';

export default function App() {
  return (
    <AuthProvider>
      <StackNavigation/>
    </AuthProvider>
  );
}