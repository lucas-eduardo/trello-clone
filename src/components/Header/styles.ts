import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  padding: 0.4rem;
  background: rgba(0,0,0,.15);
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .box {
    display: block;
    width: 100%;

    .left {
      display: flex;
      align-items: center;
    }

    .center {
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        color: hsla(0,0%,100%,.2);
        transition: color 0.1s ease;

        &:hover {
          cursor: pointer;
          color: hsla(0,0%,100%,.5);
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .left,.right {
      button {
        cursor: pointer;
        min-width: 32px;
        height: 32px;
        border-radius: 3px;
        color: #fff;
        align-items: center;
        display: flex;
        font-weight: 700;
        line-height: 32px;
        background-color: hsla(0,0%,100%,.3);
        border: 0;
        margin: 0 0.4rem 0 0;
        justify-content: center;
        transition: background-color .1s ease;

        span.svg {
          height: 32px;
          line-height: 32px;
          width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        span.text {
          padding: 0 8px 0 2px;
        }

        &:hover {
          background-color: hsla(0,0%,100%,.2);
        }
      }
    }
  }
`;
