import { ReactNode } from 'react';
import { Container, Text } from './styled';

interface HeaderProps {
    children?: ReactNode;
  }

export default function Header({ children }: HeaderProps) {
    return (
        <Container>
            <Text>My Blog TS</Text>
            {children}
        </Container>
    )
}