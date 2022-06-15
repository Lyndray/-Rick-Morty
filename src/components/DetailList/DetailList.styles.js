import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginVertical: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 2,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    marginVertical: 5,
  },
});

export default styles;