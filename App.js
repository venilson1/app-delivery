import * as React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import AuthProvider from './src/contexts/AuthContext';
import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}