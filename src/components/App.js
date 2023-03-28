import React from "react";
import Messages from "./Messages";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getMessage } from "../redux/message/messageSlice";

const App = () => {
  const dispatch = useDispatch();
  dispatch(getMessage());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
