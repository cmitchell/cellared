import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// interface Props {
// navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

const NotificationScreen = (): JSX.Element => {
  // const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>This is the NotificationScreen!!!!!!!!</Text>
    </View>
  );
};

export default NotificationScreen;
