import 'react-native-gesture-handler';

import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import DefaultTheme from './globals/theme/paperTheme';
import {NetworkProvider} from 'react-native-offline';
import {Mounter} from './modules/Mounter';
import OfflineNotice from './components/OfflineNotice';

export default function App() {
  return (
    <NetworkProvider>
      <PaperProvider theme={DefaultTheme}>
        <OfflineNotice />
        <Mounter />
      </PaperProvider>
    </NetworkProvider>
  );
}
