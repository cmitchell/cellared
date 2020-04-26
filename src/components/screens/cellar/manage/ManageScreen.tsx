import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// interface Props {
// navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

const ManageScreen = (): ReactElement => {
  // const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>This is the Cellar ManageScreen!!!!!!!!</Text>
    </View>
  );
};

export default ManageScreen;
