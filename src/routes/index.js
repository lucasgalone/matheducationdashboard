import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Class from '../pages/Class';
import Student from '../pages/Student';
import AddStudent from '../pages/Student/add/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/class" component={Class} isPrivate />
      <Route path="/student" exact component={Student} isPrivate />
      <Route path="/student/add" component={AddStudent} isPrivate />
    </Switch>
  );
}
