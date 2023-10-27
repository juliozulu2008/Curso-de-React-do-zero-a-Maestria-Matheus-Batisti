import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Julio", "Kelly", "Laura", "Ravi"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Julio", age: 20 },
    { id: 2, name: "Kelly", age: 21 },
    { id: 3, name: "Laura", age: 22 },
    { id: 4, name: "Ravi", age: 23 },
  ]);
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== randomNumber);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random User</button>
    </div>
  );
};

export default ListRender;
