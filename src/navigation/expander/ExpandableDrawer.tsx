import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export type ExpandableDrawerProps = DrawerContentComponentProps & {
  title: string;
  choices: Map<string, string>;
};

export default class ExpandableDrawer extends React.Component<
  ExpandableDrawerProps,
  {
    isExpanded: boolean;
  }
> {
  constructor(props: ExpandableDrawerProps, state: { isExpanded: boolean }) {
    super(props);
    this.state = state;
  }

  onPress = (): void => {
    this.setState(() => {
      return {
        isExpanded: !this.state.isExpanded,
      };
    });
  };

  render = (): JSX.Element => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.onPress}
          style={styles.header}
        >
          <Text style={styles.topHeading}>{this.props.title}</Text>
        </TouchableOpacity>

        {this.state.isExpanded ? (
          <DrawerContentScrollView>
            <View style={styles.expandedItem}>
              {[...this.props.choices.keys()].map(
                (label: string): JSX.Element | null => {
                  const screen = this.props.choices.get(label);
                  if (screen != undefined) {
                    return (
                      <DrawerItem
                        key={label}
                        label={label}
                        onPress={(): void => {
                          this.props.navigation.navigate(screen);
                        }}
                      />
                    );
                  } else {
                    return null;
                  }
                }
              )}
            </View>
          </DrawerContentScrollView>
        ) : null}
      </View>
    );
  };
}
