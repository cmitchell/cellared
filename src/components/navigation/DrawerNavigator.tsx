import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Component, ReactElement } from 'react';
import { View } from 'react-native';
import DetailsScreen from '../screens/cellar/details/DetailsScreen';
import ManageScreen from '../screens/cellar/manage/ManageScreen';
import NotificationScreen from '../screens/notification/NotificationsScreen';
import SearchScreen from '../screens/search';
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

const DrawerContent = (props: DrawerContentComponentProps): ReactElement => {
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
      <View>
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
            props.navigation.navigate('Shopping List');
          }}
        />
        <DrawerItem
          label="Notifications"
          onPress={(): void => {
            props.navigation.navigate('Notifications');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const SearchStack = (): ReactElement => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

const ManageStack = (): ReactElement => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Manage" component={ManageScreen} />
    </Stack.Navigator>
  );
};

const DetailsStack = (): ReactElement => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const ShoppingListStack = (): ReactElement => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shopping List" component={ShoppingListScreen} />
    </Stack.Navigator>
  );
};

const NotificationsStack = (): ReactElement => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default class DrawerNavigator extends Component {
  render = (): ReactElement => {
    const Drawer = createDrawerNavigator();

    return (
      // <ErrorBoundary onError={errorHandler}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props: DrawerContentComponentProps): ReactElement =>
            DrawerContent(props)
          }
          initialRouteName="Search"
          drawerStyle={styles.drawer}
        >
          <Drawer.Screen name="Search" component={SearchStack} />
          <Drawer.Screen name="Manage" component={ManageStack} />
          <Drawer.Screen name="Details" component={DetailsStack} />
          <Drawer.Screen name="Shopping List" component={ShoppingListStack} />
          <Drawer.Screen name="Notifications" component={NotificationsStack} />
        </Drawer.Navigator>
      </NavigationContainer>
      //  </ErrorBoundary>
    );
  };
}
