import React, { useEffect, useState } from "react";

const ManageUser = (props) => {
  const { schema, currentedit, slug } = props;
  //console.log("Manage USer",currentedit);

  const [state, setState] = useState([]);
  useEffect(() => {
    if (!currentedit) {
      return;
    } else {
      console.log("before update currrent state:", currentedit);
      setState(currentedit);
      console.log("after update local state:", state);
    }
  }, [currentedit,state]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentedit) {
      console.log("beofre update currrent state:", currentedit);
      setState(currentedit);
      console.log("after update local state:", state);
      props.edit(state);
    } else {
      props.add(state);
      console.log("after update in else condition local state:", state);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {schema.map((st) => (
          <input
            key={st.id}
            type={st.name}
            name={st.name}
            value={state.value}
            placeholder={st.name}
            onChange={(e) => handleChange(e)}
          ></input>
        ))}
        <button type="submit">{slug}</button>
      </form>
    </div>
  );
};

export default ManageUser;
