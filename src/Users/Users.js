import React, {useEffect, useState} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./Users.css"
import Modal from "../Modal/Modal";
import axios from "axios";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    axios("https://61df18aa0f3bdb0017934913.mockapi.io/api/v1/users")
      .then(({data}) => setUsers(data))
  }, [])

  return (
      <div className="container p-5">
        <div className="add-btn">
          <button onClick={() => setShowModal(!showModal)} className="bg-blue-400 px-8 py-2 rounded-lg text-white
          hover:bg-green-700 active:bg-green-800 font-bold mb-5">Регистрация</button>
          <CSSTransition
            in={showModal}
            timeout={300}
            classNames="box"
            unmountOnExit
          >
            <Modal action="add" users={users} setUsers={setUsers} setShowModal={setShowModal}/>
          </CSSTransition>
        <TransitionGroup className="grid grid-cols-3 gap-8">
          {
            users.map(item => {
              return (
                <CSSTransition
                key={item.id}
                timeout={300}
                classNames="item"
                >
                  <UserCard user={item} setUsers={setUsers} users={users}/>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        </div>
      </div>

  )
};

export default Users;