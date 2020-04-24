import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // backgroundColor: '#F5FCFF',
  },
  topHeading: {
    // paddingLeft: 10,
    fontSize: 20,
  },
  header: {
    // backgroundColor: '#F5FCFF',
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  expandedItem: {
    fontSize: 16,
    color: '#606070',
    // padding: 10,
    marginLeft: 20,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});

export default styles;
