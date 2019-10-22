import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Student from '../pages/Student';
import AddStudent from '../pages/Student/add/index';
import UpdateStudent from '../pages/Student/update/index';

import Turma from '../pages/Turma';
import AddTurma from '../pages/Turma/add/index';
import UpdateTurma from '../pages/Turma/update/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/student" exact component={Student} isPrivate />
      <Route path="/student/add" component={AddStudent} isPrivate />
      <Route path="/student/update" component={UpdateStudent} isPrivate />

      <Route path="/turma" exact component={Turma} isPrivate />
      <Route path="/turma/add" component={AddTurma} isPrivate />
      <Route path="/turma/update" component={UpdateTurma} isPrivate />
    </Switch>
  );
}
