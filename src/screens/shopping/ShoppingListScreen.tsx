import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// interface Props {
// navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

const ShoppingListScreen = (): JSX.Element => {
  // const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>Yay, this is the ShoppingListSCreen!!!!!!!!</Text>
    </View>
  );
};

export default ShoppingListScreen;
