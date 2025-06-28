import { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editName, setEditName] = useState('');
  const [editId, setEditId] = useState(null);
  const [age, setAge] = useState('');

  const url = "https://dummyjson.com/users";

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    try{
      const response = await fetch(url);
      const result = await response.json();
      setUsers(result.users);
    }catch(err){
      console.error("Error fetching employees:", err);
    }
  }

  const openEditModal = (user) => {
    setEditId(user.id);
    setEditName(`${user.firstName} ${user.lastName}`);
    setAge(user.age);
    setEditModalOpen(true);
  }

  const closeModal = () => {
    setEditModalOpen(false);
    setEditName('');
    setEditId(null);
    setAge('');
  }

  async function updateUser() {
    if (!editId) return;

    try{
      const url = `https://dummyjson.com/user/${editId}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lastName: editName , id: editId , age: age }),
      })
      const result = await response.json();
      console.log("User updated:", result);
    }catch(err){
      console.error("Error updating user:", err);
    }
  }

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>Id : {user.id}</p>
          <p>name: {user.firstName} {' '} {user.lastName}</p>
          <p>age: {user.age}</p>

          <button onClick={() => openEditModal(user)}>Edit</button>
        </div>
      ))}

      {
        editModalOpen && 
        <div>
          <h2>edit user</h2>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={closeModal}>cancle</button>
          <button onClick={updateUser}>save</button>
        </div>
      }
    </>
  )
}

export default App
