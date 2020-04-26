import React, { ReactElement } from 'react';
// import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './components/navigation/DrawerNavigator';

export default function App(): ReactElement {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}
