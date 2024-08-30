import style from './Success.module.scss';

const Success = () => {
  return (
    <div className={style.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем 5 пользователям отправлено приглашение.</p>
      <button className={style.sendInviteBtn}>Назад</button>
    </div>
  );
};

export default Success;
