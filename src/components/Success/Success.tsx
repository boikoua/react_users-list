import style from './Success.module.scss';

type Props = {
  inviteUsers: number;
};

const Success: React.FC<Props> = ({ inviteUsers }) => {
  return (
    <div className={style.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>
        {' '}
        {inviteUsers > 1
          ? `Всем ${inviteUsers} пользователям отправлено приглашение.`
          : 'Одному пользователю было отправлено приглашение.'}
      </p>
      <button
        className={style.sendInviteBtn}
        onClick={() => window.location.reload()}
      >
        Назад
      </button>
    </div>
  );
};

export default Success;
