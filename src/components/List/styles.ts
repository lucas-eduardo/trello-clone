import styled from 'styled-components';

export const Container = styled.div<{ done: any }>`
  width: 100%;
  max-width: 272px;
  height: 100%;
  /* flex-grow: 0; flex-shrinl: 0; flex-basis: 320px */
  flex: 0 0 320px;
  background: #ebecf0;
  margin: 0 4px;
  border-radius: 3px;

  &:first-child {
    margin-left: 0.8rem;
  }

  header {
    padding: 1rem 0.8rem;
    padding-right: 3.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 20px;

    h2 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.4rem;
      padding: 0 1rem;
      color: #000;
    }
  }

  ul {
    margin: 0 0.4rem;
    padding: 0 0.4rem;
  }
`;
