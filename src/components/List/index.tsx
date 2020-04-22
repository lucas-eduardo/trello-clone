import React from 'react';

import Card from '../Card';

import { Container } from './styles';

export default ({ data, index: listIndex }: { data: any, index: number }) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
      </header>

      <ul>
        {data.cards.map((card: any, index: number) => <Card key={card.id} listIndex={listIndex} index={index} data={card} />)}
      </ul>
    </Container>
  );
}
