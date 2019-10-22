import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../../services/api';

import { Container } from './styles';

import { updateStudentRequest } from '../../../store/modules/student/actions';

const schema = Yup.object().shape({
  id: Yup.string(),
  nome: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  turma_id: Yup.string().required('A turma é obrigatória'),
});

export default function UpdateStudent() {
  const student = useSelector(state => state.student.dto);
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

  function handleSubmit({ id, nome, email, password, turma_id }) {
    dispatch(updateStudentRequest(id, nome, email, password, turma_id));
  }
  return (
    <Container>
      <h2>EDIÇÃO DE ALUNO</h2>
      <Form initialData={student} schema={schema} onSubmit={handleSubmit}>
        <Input name="id" hidden />
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
