import { useEffect, useState } from 'react';
import './App.scss';
import Success from './components/Success/Success';
import Users from './components/Users/Users';
import { UserType } from './types/UserType';

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [invites, setInvites] = useState<number[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const inviteUser = (userId: number) => {
    if (invites.includes(userId)) {
      setInvites((prev) => prev.filter((id) => id !== userId));
    } else {
      setInvites((prev) => [...prev, userId]);
    }
  };

  const handleChangeFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSuccessFunc = () => {
    setIsSuccess(true);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then((response) => response.json())
        .then((usersFromServer) => setUsers(usersFromServer.data))
        .catch((e) => {
          const error = new Error('Server error 404');
          alert(error);
        })
        .finally(() => setIsLoading(false));
    }, 1500);
  }, []);

  return (
    <div className="app">
      {isSuccess ? (
        <Success inviteUsers={invites.length} />
      ) : (
        <Users
          users={users}
          isLoading={isLoading}
          inviteUser={inviteUser}
          invites={invites}
          search={search}
          onChange={handleChangeFunc}
          onSuccess={handleSuccessFunc}
        />
      )}
    </div>
  );
}

export default App;
