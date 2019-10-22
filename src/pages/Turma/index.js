import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

import { getTurmaRequest } from '../../store/modules/turma/actions';

export default function Turma() {
  const [turma, setTurma] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadGrid() {
      const response = await api.get('turmas');
      const listApi = response.data;
      setTurma(listApi);
    }

    loadGrid();
  }, []);

  async function handleDelete(data) {
    const response = await api.delete(`turmas/${data}`);
    console.log(response);
    if (response.data.excluido) {
      toast.success('Turma excluída com sucesso!');
      setTurma(turma.filter(x => x.id !== data));
    } else {
      toast.error('Essa turma está vinculada com estudantes!');
    }
  }

  function handleEdit(data) {
    dispatch(getTurmaRequest(data.id));
  }

  return (
    <Container>
      <Link to="/turma/add">Adicionar</Link>

      <h2>TABELA DE TURMAS</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {turma.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.nome}</td>
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

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Container } from './styles';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';

// // import { getStudentRequest } from '../../store/modules/student/actions';

// export default function Class() {
//   const [student, setStudent] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     async function loadGrid() {
//       const response = await api.get('students');
//       const listApi = response.data;
//       setStudent(listApi);
//     }

//     loadGrid();
//   }, []);

//   function handleDelete(data) {
//     // api.delete(`students/${data}`);
//     // setStudent(student.filter(x => x.id != data));
//   }

//   function handleEdit(data) {
//     // dispatch(getStudentRequest(data.id));
//   }

//   return (
//     <Container>
//       <Link to="/student/add">Adicionar</Link>

//       <h2>TABELA DE ALUNOS</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Nome</th>
//             <th>Ações</th>
//           </tr>
//         </thead>
//         <tbody>
//           {student.map(s => (
//             <tr key={s.id}>
//               <td>{s.id}</td>
//               <td>{s.nome}</td>
//               <td>
//                 <button onClick={() => handleEdit(s)}>Editar</button>
//                 <button onClick={() => handleDelete(s.id)}>Excluir</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Container>
//   );
// }
