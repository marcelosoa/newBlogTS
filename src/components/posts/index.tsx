import { Button, Text } from './styled';

interface Item {
    id: number,
    title: string
}

// Errei em não criar uma interface para typar a propriedade
interface PostProps {
    item: Item,
    handleRemoveItem: (itemId: number) => void
}

export default function Posts({ item, handleRemoveItem }: PostProps) {
    return (
      <Button onPress={() => handleRemoveItem(item.id)}>
        <Text>{item.title}</Text>
      </Button>
    );
  }
