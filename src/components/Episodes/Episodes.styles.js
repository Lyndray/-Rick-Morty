import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: '#fff',
    width: width / 1.8,
    borderRadius: 10,
    alignItems: 'center',
  },
  item_text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginVertical: 5,
  },
});

export default styles;
