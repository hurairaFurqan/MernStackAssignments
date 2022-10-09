import "./App.css";
import ManageUser from "./components/ManageUser";

import { useState } from "react";
import UserFunctions from "./components/UserFunctions";

const inputSchema = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    value: "",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    value: "",
  },
  {
    id: 3,
    name: "age",
    type: "number",
    placeholder: "Age",
    value: "",
  },
];
const userData = [
  {
    id: 1,
    name: "Huraira",
    age: 22,
    email: "hurairafurqan@gmail.com",
  },
  {
    id: 2,
    name: "Zunaira",
    age: 21,
    email: "zuni767@gmail.com",
  },
  {
    id: 3,
    name: "Hasnain",
    age: 22,
    email: "hasnyn767@gmail.com",
  },
];
function App() {
  const [user, setUser] = useState(userData);
  const [currentEdit, setcurrentEdit] = useState(null);
  const [editButton, seteditButton] = useState(false);
  const addUser = (state) => {
    const { name, age, email } = state;

    setUser((st) => [
      ...st,
      {
        id: st.length + 1,
        name: name,
        age: age,
        email: email,
      },
    ]);
    console.log("User data:", user);

    // console.log(user);
    // axios
    //   .post(`https://crudcrud.com/api/ac397514ee1b4f45825efce6e48f9194/user`, {
    //     user,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  const deleteRow = (id) => {
    console.log(id);

    setUser((st) =>
      st.filter((el) => {
        return el.id !== id;
      })
    );
    console.log("delete id is:",id);
    // axios
    //   .delete(
    //     `https://crudcrud.com/api/ac397514ee1b4f45825efce6e48f9194/user/${id}`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  const handleUpdate = (id) => {
    setcurrentEdit(user.filter(data => {return data.id===id}));
    seteditButton(true);
    //console.log("currentEdit: ", currentEdit);
  };
  
  const update = (state) => {

    console.log("state in back update function", state);
    setUser((st) => {
      return st.map((el) =>{
        if(el.id===state.id){
          return state
        }
        return el;
      });
    });

    seteditButton(false);
  }
  return (
    <div className="App">
      App JS
      <ManageUser
        schema={inputSchema}
        add={addUser}
        data={userData}
        currentedit = {currentEdit}
        slug = {editButton ? 'Update':'Submit'}
        edit = {update}
      ></ManageUser>
      <UserFunctions
        user={user}
        delete={deleteRow}
        handleupdate={handleUpdate}
      ></UserFunctions>
    </div>
  );
}

export default App;
