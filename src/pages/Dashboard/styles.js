import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 15px;
    margin-top: 0 15px;
  }

  h2 {
    text-align: center;
    color: #8c1100;
  }
`;

export const Classe = styled.li`
  padding: 60px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    font-size: 25px;
    font-weight: normal;
    margin-left: auto;
    margin-right: auto;
  }

  span {
    display: block;
    font-size: 15px;
    margin-top: 3px;
    color: #666;
  }
  div {
    display: block;
    label {
      justify-content: flex-start;
      font-size: 17px;
    }
  }
`;
