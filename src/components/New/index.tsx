import { Container, TextInput, Button } from './styled';
import React, { useState } from 'react'

interface NewProps {
  handleRefresh: (text: string) => void;
}

export default function New({ handleRefresh }: NewProps) {
  const [text, setText] = useState('');

  function handleTextChange(item: string) {
    setText(item);
  }

  function handleButtonPress() {
    handleRefresh(text);
    setText('');
  }

  return (
    <Container>
      <TextInput
        placeholder='add new item'
        value={text}
        onChangeText={handleTextChange}
      />
      <Button onPress={handleButtonPress} title='new post' color='purple' />
    </Container>
  );
}
