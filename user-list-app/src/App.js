import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [data, updateData] = useState([])

  useEffect(()=>{
    // API call to get user list
    axios
      .get("https://randomuser.me/api/?results=70")
      .then(response => {
        const data = response.data.results;
        updateData(data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  return (
      <div className="App">
        <Header title={"List Of Users"} />
        <div className="row d-flex justify-content-center">
          {data.map((item, index) => (
            <UserList key={index} item={item} />
          ))}
        </div>
      </div>
    );
}
