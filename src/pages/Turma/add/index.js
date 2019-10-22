import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { createTurmaRequest } from '../../../store/modules/turma/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
});

export default function AddTurma() {
  const dispatch = useDispatch();

  function handleSubmit({ nome }) {
    dispatch(createTurmaRequest(nome));
  }
  return (
    <Container>
      <h2>CADASTRO DE TURMA</h2>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome completo" />

        <button type="submit">Criar Turma</button>
      </Form>
      <Link to="/turma">
        <button>Voltar</button>
      </Link>
    </Container>
  );
}
