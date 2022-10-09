
const UserFunctions = (props) => {
  const { user } = props;
  //console.log("in user function:",user);

  // const [data, Setdata] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`https://crudcrud.com/api/ac397514ee1b4f45825efce6e48f9194/user`)
  //     .then((res) => {
  //       const info = res.data;
  //       Setdata(info);
  //       console.log("state info:", res.data);
  //     });
  // }, []);
  const editRow = (e) => {
    var id = Number(e.target.dataset.id);
    props.handleupdate(id);
  };
  const removeRow = (e) => {
    //console.log("id:",e.target.dataset.id);
    var id = Number(e.target.dataset.id);
    props.delete(id);
  };
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>ID</th>    
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
          {user.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.age}</td>
                <td>
                  <button data-id={val.id} onClick={editRow}>
                    Edit
                  </button>
                </td>
                <td>
                  <button data-id={val.id} onClick={removeRow}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserFunctions;
