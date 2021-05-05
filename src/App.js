import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import Dashboard from './pages/dashboard';

const Login = lazy(() => import('./pages/login'));
const Signup = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));



function App() {
  const {user} = useAuthListener()

  return (
    <UserContext.Provider value = {{user}}>
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
    </UserContext.Provider>
  );
}

export default App;
