import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import DefaultTheme from './globals/theme';
import { NetworkProvider } from 'react-native-offline';
import { Mounter } from './modules/Mounter';
import OfflineNotice from './components/OfflineNotice';

export default function App() {
  return (
    <NetworkProvider>
      <OfflineNotice />
      <ThemeProvider theme={DefaultTheme}>
        
        <Mounter />
      </ThemeProvider>
    </NetworkProvider>
  );
}
