import Users from "./Users/Users";
import Header from "./Header/Header";
import {Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/registration" element={<Users/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </>
  );
}

export default App;
