import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// interface Props {
// navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

const DetailsScreen = (): ReactElement => {
  // const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>This is the Cellar DetailsScreen! :) </Text>
    </View>
  );
};

export default DetailsScreen;
