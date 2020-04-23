import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Component } from 'react';
import { ScrollViewProps, Text, View } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import styles from './styles';

// const errorHandler = (error: Error, stackTrace: string): void => {
//   console.log(error);
//   console.log('************************************************');
//   console.log(stackTrace);
// };

const DrawerContent = (props: ScrollViewProps): JSX.Element => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Text>Drawer content</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default class Navigator extends Component {
  render = (): JSX.Element => {
    const Drawer = createDrawerNavigator();

    return (
      // <ErrorBoundary onError={errorHandler}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props: DrawerContentComponentProps): JSX.Element =>
            DrawerContent(props)
          }
          initialRouteName="Home"
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{ drawerLabel: 'Home' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      //  </ErrorBoundary>
    );
  };
}
