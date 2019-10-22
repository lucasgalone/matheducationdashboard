import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 30%;
  margin: 100px auto;

  a {
    button {
      height: 25px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#fd3f3f')};
      }
    }
  }

  h2 {
    /* text-align: center; */
    color: #8c1100;
  }

  table {
    width: 300px;
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: center;
    padding: 8px;

    button {
      margin: 10 10 10px;
      height: 20px;
      font-weight: bold;
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
    background-color: #fd1616;
    color: #080000;
  }
`;
