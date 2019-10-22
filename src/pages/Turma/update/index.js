import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { updateTurmaRequest } from '../../../store/modules/turma/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  id: Yup.string(),
  nome: Yup.string().required('O nome é obrigatório'),
});

export default function UpdateTurma() {
  const turma = useSelector(state => state.turma.dto);
  const dispatch = useDispatch();

  function handleSubmit({ id, nome }) {
    dispatch(updateTurmaRequest(id, nome));
  }
  return (
    <Container>
      <h2>ALTERAÇÃO DE TURMA</h2>
      <Form initialData={turma} schema={schema} onSubmit={handleSubmit}>
        <Input name="id" hidden />
        <Input name="nome" placeholder="Nome completo" />

        <button type="submit">Alterar Turma</button>
      </Form>
      <Link to="/turma">
        <button>Voltar</button>
      </Link>
    </Container>
  );
}
