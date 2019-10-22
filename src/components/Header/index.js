import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="MathEducation" height="50" width="50" />
          <ul>
            <li>
              <Link to="/dashboard">PAINEL</Link>
            </li>
            <li>
              <Link to="/student">ALUNO</Link>
            </li>
            <li>
              <Link to="/turma">TURMA</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.nome}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.nome}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
