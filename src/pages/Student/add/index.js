import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../../services/api';

import { Container } from './styles';

import { createStudentRequest } from '../../../store/modules/student/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  turma_id: Yup.number().required('A turma é obrigatória'),
});

export default function AddStudent() {
  const dispatch = useDispatch();
  const [comboboxTurma, setComboboxTurma] = useState([]);

  useEffect(() => {
    async function loadCombobox() {
      const response = await api.get('turmas');
      var newArray = response.data.map(function(item) {
        return {
          id: item.id,
          title: item.nome,
        };
      });
      setComboboxTurma(newArray);
    }

    loadCombobox();
  }, []);

  function handleSubmit({ nome, email, password, turma_id }) {
    dispatch(createStudentRequest(nome, email, password, turma_id));
  }

  return (
    <Container>
      <h2>CADASTRO DE ALUNO</h2>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Select name="turma_id" placeholder="Turma" options={comboboxTurma} />

        <button type="submit">Criar conta</button>
      </Form>
      <Link to="/student">
        <button>Voltar</button>
      </Link>
    </Container>
  );
}
