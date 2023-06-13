import { Alert, FlatList, Keyboard } from 'react-native';
import Header from './src/components/Header';
import { View, Text } from './styled'
import React, { useState } from 'react';
import Posts from './src/components/posts';
import New from './src/components/New';
import { TouchableWithoutFeedback } from 'react-native';

interface Posts {
  id: number,
  title: string,
}

export default function App() {
  const [posts, setPosts] = useState<Posts[]>([
    { id: 1, title: 'Ababa' },
    { id: 2, title: 'Doubabou' }
  ]);

  function handleRemoveItem(postId: number) {
    setPosts((prevState) => {
      return prevState.filter(post => post.id !== postId);
    })
  }

  function handleRefresh(text: string) {
    if (text.length > 3) {
      setPosts((prevState) => {
        return [
          { id: Math.random(), title: text },
          ...prevState
        ];
      });
    } else {
      Alert.alert('OOps!', 'necessário mais de 3 letras', [
        { text: 'Entendido', onPress: () => console.log('alrt')}
      ])
    }
    
  }
  

  return (
    <>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('missed keyboard');
      }}>
        <React.Fragment>
          <Header />
          <View>
            <New handleRefresh={handleRefresh}/>
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <Posts item={item} handleRemoveItem={handleRemoveItem}/>
              )}
            />
          </View>
        </React.Fragment>
      </TouchableWithoutFeedback>
    </>
  );  
}