import react from 'react';
import { Image, Text, TextInput, View } from 'react-native';

export default function App() {

  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30, paddingBottom: 20 }}>Hello, I am your cat.....!</Text>
      {/* <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', width: 200, height: 200 }} /> */}
      <TextInput defaultValue="Type anything" onChangeText={newText => setText(newText)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />

    </View>
  );
}