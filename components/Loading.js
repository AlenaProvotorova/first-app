import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>loading...</Text>
    </View>
  );
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0E8D5'
  },
  text:{
    fontSize: 20
  }
})