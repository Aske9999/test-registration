import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css"
import logo from "../images/logo1.png"

const Header = () => {
  return (
    <header className="header py-3 relative">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="header-logo flex justify-between items-center">
            <img className="logo mr-4" src={logo} alt="logo"/>
            <h1>Kyrgyz TEST</h1>
          </div>
          <nav>
            <NavLink to="/" className="bg-green-700 px-8 py-2 rounded-lg text-yellow-500 hover:bg-green-800 active:bg-green-900 font-bold mr-2">Главная</NavLink>
            <NavLink to="/registration" className="bg-green-700 px-8 py-2 rounded-lg text-yellow-500 hover:bg-green-800 active:bg-green-900 font-bold mr-2">Пользователи</NavLink>
            <NavLink to="/" className="bg-green-700 px-8 py-2 rounded-lg text-yellow-500 hover:bg-green-800 active:bg-green-900 font-bold mr-2">О нас</NavLink>
            <NavLink to="/" className="bg-green-700 px-8 py-2 rounded-lg text-yellow-500 hover:bg-green-800 active:bg-green-900 font-bold mr-2">Контакты</NavLink>
          </nav>
        </div>
        <div className="language absolute">
          <select className="lang-select" id="lang">
            <option value="kg">KG</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;