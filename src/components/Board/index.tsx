import React, { useState } from 'react';
import produce from 'immer';

import BoardContext from './context';

import { loadLists } from '../../services/api';

import List from '../List';

import { Container } from './styles';

const data = loadLists();

export default () => {
  const [lists, setLists] = useState(data);

  function move(fromList: number, toList: number, from: number, to: number) {
    setLists(produce(lists, (draft: any) => {
      const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index: number) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  );
}
