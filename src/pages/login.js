import { useHistory } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import FirebaseContext from '../context/firebase';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, serError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - INstaclone';
  }, []);

  return (
    <div className="container flex mx-auto mzx-w-screen-md items-cents h-screen">
      <p>No idear at all</p>
    </div>
  );
}
