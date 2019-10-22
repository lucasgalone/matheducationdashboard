import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 70%;
  margin: 100px auto;

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #fd1616;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#fd3f3f')};
    }
  }

  h2 {
    text-align: center;
    color: #8c1100;
  }

  table {
    width: 300px;
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    text-align: left;
    padding: 8px;

    button {
      margin: 5px 0 0;
      height: 25px;
      background: #fd1616;
      font-weight: bold;
      color: #080000;
      border-radius: 4px;
      font-size: 15;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#fd3f3f')};
      }
    }
  }

  tr {
    background-color: #fff;
  }
  th {
    background-color: #333;
    color: white;
  }
`;
