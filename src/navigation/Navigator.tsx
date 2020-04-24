import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { Drawer } from 'react-native-paper';
import DetailsScreen from '../screens/cellar/details/DetailsScreen';
import ManageScreen from '../screens/cellar/manage/ManageScreen';
import NotificationScreen from '../screens/notification/NotificationsScreen';
import SearchScreen from '../screens/search/SearchScreen';
import ShoppingListScreen from '../screens/shopping/ShoppingListScreen';
import ExpandableDrawerMenu, {
  ExpandableDrawerProps,
} from './expander/ExpandableDrawer';
import styles from './styles';

// const errorHandler = (error: Error, stackTrace: string): void => {
//   console.log(error);
//   console.log('************************************************');
//   console.log(stackTrace);
// };

const DrawerContent = (props: DrawerContentComponentProps): JSX.Element => {
  const c = new Map<string, string>();
  c.set('Manage', 'Manage');
  c.set('Details', 'Details');
  const expandable: ExpandableDrawerProps = {
    title: 'Cellar',
    choices: c,
    navigation: props.navigation,
    state: props.state,
    descriptors: props.descriptors,
    progress: props.progress,
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Search"
            onPress={(): void => {
              props.navigation.navigate('Search');
            }}
          />

          <ExpandableDrawerMenu {...expandable} />

          <DrawerItem
            // icon={({ color, size }) => (
            //   <MaterialCommunityIcons name="tune" color={color} size={size} />
            // )}
            label="Shopping List"
            onPress={(): void => {
              props.navigation.navigate('Shopping');
            }}
          />
          <DrawerItem
            label="Notification"
            onPress={(): void => {
              props.navigation.navigate('Notification');
            }}
          />
        </Drawer.Section>
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
          initialRouteName="Search"
        >
          <Drawer.Screen name="Search" component={SearchScreen} />
          <Drawer.Screen name="Manage" component={ManageScreen} />
          <Drawer.Screen name="Details" component={DetailsScreen} />
          <Drawer.Screen name="Shopping" component={ShoppingListScreen} />
          <Drawer.Screen name="Notification" component={NotificationScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      //  </ErrorBoundary>
    );
  };
}
