import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

import { getStudentRequest } from '../../store/modules/student/actions';

export default function Student() {
  const [student, setStudent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadGrid() {
      const response = await api.get('students');
      const listApi = response.data;
      setStudent(listApi);
    }

    loadGrid();
  }, []);

  function handleDelete(data) {
    api.delete(`students/${data}`);
    toast.success('Estudante excluído com sucesso!');
    setStudent(student.filter(x => x.id !== data));
  }

  function handleEdit(data) {
    dispatch(getStudentRequest(data.id));
  }

  return (
    <Container>
      <Link to="/student/add">Adicionar</Link>

      <h2>TABELA DE ALUNOS</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Score</th>
            <th>Turma</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {student.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nome}</td>
              <td>{s.email}</td>
              <td>{s.score}</td>
              <td>{s.turma ? s.turma.nome : ''}</td>
              <td>
                <button onClick={() => handleEdit(s)}>Editar</button>
                <button onClick={() => handleDelete(s.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
