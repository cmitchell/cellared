import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// interface Props {
// navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

const SearchScreen = (): JSX.Element => {
  // const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>This is the HomeScreen -- it is also the search screen.</Text>
    </View>
  );
};

export default SearchScreen;
