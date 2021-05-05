import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Dashboard from './pages/dashboard';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));



function App() {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} exact />
          <Route path={ROUTES.SIGN_UP} component={Signup} exact />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route component={NotFound}/>
        </Switch>
      </Suspense> 
    </Router>
  );
}

export default App;
