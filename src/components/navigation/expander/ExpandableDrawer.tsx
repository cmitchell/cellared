import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
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

  render = (): ReactElement => {
    return (
      <View style={styles.expandableDrawer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.onPress}
          style={styles.expandableDrawerContainer}
        >
          <Text style={styles.expandableDrawerHeading}>{this.props.title}</Text>
        </TouchableOpacity>

        {this.state.isExpanded ? (
          <DrawerContentScrollView>
            <View style={styles.expandedItem}>
              {[...this.props.choices.keys()].map(
                (label: string): ReactElement | null => {
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
