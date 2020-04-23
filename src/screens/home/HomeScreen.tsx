import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// interface Props {
// navigation: NavigationScreenProp<NavigationState, NavigationParams>;
// }

const HomeScreen = (): JSX.Element => {
  // <Props> {
  // static navigationOptions = {
  // headerTitle: strings.homeTitle,
  // headerLeft: Platform.select({
  //   ios: null,
  //   android: (
  //     <Icon
  //       name="md-menu"
  //       type="ionicon"
  //       containerStyle={styles.icon}
  //       onPress={() => navigation.toggleDrawer()}
  //     />
  //   ),
  // }),
  // };

  // const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Text>This is the HomeScreen.</Text>
      {/* <Button
          title={detailStrings.detailTitle}
          onPress={() => navigate("DetailScreen")}
        />
        <Button
          title={optionStrings.optionsTitle}
          onPress={() => navigate("OptionsScreen")}
        /> */}
    </View>
  );
};

export default HomeScreen;
