import React, { useState } from "react";
import Users from "./Users";
import "./App.css";
import Table from "./Table";
function Search() {
  const [change, setChange] = useState("");
  const keys = ["first_name", "last_name", "email", "gender"];

  const search = (data) => {
    //FIRST WAY OF FETCHING DATA
    //====================================
    // return data.filter(
    //   (user) =>
    //     user.first_name.toLowerCase().includes(change) ||
    //     user.last_name.toLowerCase().includes(change) ||
    //     user.email.toLowerCase().includes(change)
    // );
    //======================================================

    //SECOND WAY OF FECTHING DATA

    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(change))
    );
  };

  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setChange(e.target.value)}
        />
      </div>

      <div className="ul__container">
        {/* <ul>
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(change)
          ).map((user) => {
            return (
              <li key={user.id} className="list">
                {user.first_name}
              </li>
            );
          })}
        </ul> */}
        <Table data={search(Users)} />
      </div>
    </div>
  );
}

export default Search;
