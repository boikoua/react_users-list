import { UserType } from '../../types/UserType';
import Skeleton from '../Skeleton';
import User from '../User/User';
import style from './Users.module.scss';

type Props = {
  users: UserType[];
  isLoading: boolean;
  inviteUser: (userId: number) => void;
  invites: number[];
  search: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSuccess: () => void;
};

const Users: React.FC<Props> = ({
  users,
  isLoading,
  inviteUser,
  invites,
  search,
  onChange,
  onSuccess,
}) => {
  return (
    <>
      <div className={style.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={search}
          onChange={onChange}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className={style.skeletonList}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={style.usersList}>
          {users
            .filter((user) => {
              const userFullName = `${user.first_name} ${user.last_name}`;

              return (
                userFullName.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((user) => (
              <User
                id={user.id}
                user={user}
                key={user.id}
                inviteUser={inviteUser}
                invites={invites}
              />
            ))}
        </ul>
      )}

      {invites.length > 0 && (
        <button onClick={onSuccess} className={style.sendInviteBtn}>
          Отправить приглашение
        </button>
      )}
    </>
  );
};

export default Users;
