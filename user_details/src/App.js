import React, { useState } from "react";

import Adduser from "./components/User/AddUser";
import Userlist from "./components/User/Userlist";

function App() {
  const [allList, setAllList] = useState([]);

  const addingInUserList = (name, mobile, email, age) => {
    setAllList((prevState) => [
      ...prevState,
      {
        name: name,
        mobile: mobile,
        email: email,
        age: age,
      },
    ]);
  };

  return (
    <div className="App">
      <Adduser addingInUserList={addingInUserList} />
      <Userlist allList={allList} />
    </div>
  );
}

export default App;
