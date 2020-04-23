import React from 'react';
// import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigator from './navigation/Navigator';

// const App = (): JSX.Element => {
export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}

// AppRegistry.registerComponent('app', () => App);

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
