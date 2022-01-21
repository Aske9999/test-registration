import React from 'react';
import {useForm} from "react-hook-form";
import "./Modal.css";
import axios from "axios";


const Modal = ({users, setUsers, setShowModal, action, defaultUser}) => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const add = (data) => {
    axios.post("https://61df18aa0f3bdb0017934913.mockapi.io/api/v1/users", data)
      .then(({data}) => setUsers([...users, data]))
      .catch(() => alert('Ошибка'))
    reset()
    setShowModal(false)
  }
  const save = (updatedUser) => {
    axios.put(`https://61df18aa0f3bdb0017934913.mockapi.io/api/v1/users/${defaultUser.id}`, updatedUser)
      .then(({data}) => setUsers(users.map(item => item.id === defaultUser.id ? data : item)))
      .catch(() => alert('Ошибка'))
      .finally(() => setShowModal(false))
  }

  // const closeModal = () => setShowModal(false)

  return (
    <div onClick={() => setShowModal(false)} className="box absolute inset-0 min-h-screen">
      <form onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit(action === 'add' ? add : save)}
            className="relative flex flex-col custom-form ">
        <div className="flex flex-col mb-3">
          <label htmlFor="name">Имя:</label>
          <input defaultValue={defaultUser && defaultUser.name} id="name"
                 type="text" {...register("name", {required: true})}/>
          {errors.name && <div><span className="star">*</span> Заполните имя</div>}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="age">Возраст:</label>
          <input defaultValue={defaultUser && defaultUser.age} id="age"
                 type="number" {...register("age", {required: true})}/>
          {errors.age && <div><span className="star">*</span> Заполните возраст</div>}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email">Email:</label>
          <input defaultValue={defaultUser && defaultUser.email} id="email"
                 type="text" {...register("email", {required: true})}/>
          {errors.email && <div><span className="star">*</span> Заполните Email</div>}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="phone">Телефон:</label>
          <input defaultValue={defaultUser && defaultUser.phone} id="phone"
                 type="number" {...register("phone", {required: true})}/>
          {errors.phone && <div><span className="star">*</span> Укажите телефон</div>}
        </div>
        <hr/>
        <div>
          <input defaultChecked={defaultUser && defaultUser.gender === 'Муж.'} className="mr-2" value="Муж."
                 name="gender" id="male" type="radio" {...register("gender")}/>
          <label htmlFor="male">Муж.</label>
        </div>
        <div>
          <input defaultChecked={defaultUser && defaultUser.gender === 'Жен.'} className="mr-2" value="Жен."
                 name="gender" id="female" type="radio" {...register("gender")}/>
          <label htmlFor="female">Жен.</label>
        </div>
        <hr/>
        <div>
          <input defaultChecked={defaultUser && defaultUser.gender === 'email mailing'} className="mr-2"
                 id="email-mailing" value="email mailing" type="checkbox" {...register("mailing")}/>
          <label htmlFor="email-mailing">email-mailing</label>
        </div>
        <div>
          <input defaultChecked={defaultUser && defaultUser.gender === 'sms mailing'} className="mr-2" id="sms-mailing"
                 value="sms mailing" type="checkbox" {...register("mailing")}/>
          <label htmlFor="sms-mailing">sms-mailing</label>
        </div>
        <button  className="bg-blue-400 px-8 py-2 rounded-lg text-white hover:bg-green-700 active:bg-green-800 font-bold mt-4">
          {
            action === 'add' ? 'Зарегистрироваться' : 'Сохранить'
          }
        </button>
        <button onClick={() => setShowModal(false)} className="x-btn absolute" type="button">X</button>
      </form>
    </div>
  );
};

export default Modal;