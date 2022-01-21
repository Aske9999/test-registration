import React, {useState} from 'react';
import '../Users/Users.css'
import axios from "axios";
import {CSSTransition} from "react-transition-group";
import Modal from "../Modal/Modal";

const UserCard = ({user, setUsers, users}) => {
  const [showModal, setShowModal] = useState(false)
  const deleteUser = () => {
    axios.delete(`https://61df18aa0f3bdb0017934913.mockapi.io/api/v1/users/${user.id}`)
      .then(() => setUsers(users.filter(item => item.id !== user.id)))
      .catch(() => alert('Ошибка'))
  }
  return (
    <div className="mb-4">
      <div className="data-block flex flex-col justify-between" key={user.id}>
        <div>
          <h3>{user.name}</h3>
          <div>Возраст: <span className="text-yellow-400">{user.age}</span></div>
          <div>Пол: <span className="text-yellow-400">{user.gender}</span></div>
          <div>Email: <span className="text-yellow-400">{user.email}</span> </div>
          <div>Телефон: <span className="text-yellow-400">{user.phone}</span> </div>
          <span>Рассылка: <span className="text-yellow-400">
          {
            user.mailing && user.mailing.length
              ? user.mailing.map((item, idx) => {
              return (
                <div key={idx}>{item}</div>
              )
            })
              : <span>Не указано</span>
          }</span>
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={() => setShowModal(true)} className="bg-blue-700 px-2 py-2 rounded-lg text-white hover:bg-blue-800 active:bg-blue-900 font-bold mr-2" type="button">Изменить</button>
          <button onClick={deleteUser} className="bg-red-700 px-2 py-2 rounded-lg text-white hover:bg-red-800 active:bg-red-900 font-bold" type="button">Удалить</button>
        </div>
      </div>

      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="box"
        unmountOnExit
      >
        <Modal defaultUser={user} action="edit" users={users} setUsers={setUsers} setShowModal={setShowModal}/>
      </CSSTransition>
    </div>
  );
};

export default UserCard;