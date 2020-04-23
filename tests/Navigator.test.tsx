/**
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import 'react-native';
import Navigator from '../src/navigation/Navigator';

const createTestProps = (props: Object) => ({
  // navigation: {
  //   navigate: jest.fn(),
  // },
  DrawerContent: jest.fn(),
  ...props,
});

describe('Navigator', () => {
  let wrapper: ShallowWrapper;
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
    wrapper = shallow(<Navigator {...props} />);
  });

  // describe('rendering', () => {
  //   it('renders correctly', () => {
  //     renderer.create(<Navigator {...props} />);
  //   });
  // });

  describe('rendering', () => {
    it('renders correctly', () => {
      // console.info(wrapper.length);
      // console.info(wrapper.children());
      expect(wrapper.find(NavigationContainer));
      // expect(wrapper.prop("Drawer"))
    });
  });
});
