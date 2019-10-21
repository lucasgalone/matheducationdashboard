import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

import { createStudentRequest } from '../../../store/modules/student/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  turma: Yup.string().required('A turma é obrigatória'),
});

export default function AddStudent() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password, turma }) {
    dispatch(createStudentRequest(nome, email, password, turma));
  }

  return (
    <Container>
      <h2>CADASTRO DE ALUNO</h2>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Input name="turma" placeholder="Turma" />

        <button type="submit">Criar conta</button>
      </Form>
      <Link to="/student">
        <button>Voltar</button>
      </Link>
    </Container>
  );
}
