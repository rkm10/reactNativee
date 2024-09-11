import react, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30, paddingBottom: 20 }}>Hello, I am your cat.....!</Text>
      <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', width: 200, height: 200 }} />
      <TextInput onChangeText={newText => setText(newText)} defaultValue={text} placeholder="Type here to cats!"
        style={{ height: 40 }} />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split('')
          .map(word => word && '🐱')
          .join('')
        }
      </Text>
    </View>
  );
}