import { useEffect, useState } from 'react';
import './App.scss';
import Success from './components/Success/Success';
import Users from './components/Users/Users';
import { UserType } from './types/UserType';

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then((response) => response.json())
        .then((usersFromServer) => setUsers(usersFromServer.data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }, 2000);
  }, []);

  return (
    <div className="app">
      <Users users={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
