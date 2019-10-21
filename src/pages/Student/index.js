import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { Link } from 'react-router-dom';

// import { signUpRequest } from '../../store/modules/student/actions';

export default function Student() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password }) {
    // dispatch(signUpRequest(nome, email, password));
  }

  return (
    <Container>
      <Link to="/student/add">Adicionar</Link>

      <h2>TABELA DE AULUNOS</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Score</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
