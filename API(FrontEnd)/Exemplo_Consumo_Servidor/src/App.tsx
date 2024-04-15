import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import './App.css'

interface User{
  id: number;
  nome: string; 
} 

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState("");
  const [selectedId, setSelectedId] = useState(-1);

    const handleGetUsers = async () => {
        const res = await axios.get("http://localhost:8080/users");

        setUsers(res.data);

        alert(JSON.stringify(res.data));
    }

    const handleAddOrUpdateUser = async () => {
        if(selectedId < 0){
          await axios.post("http://localhost:8080/users",{
            nome: userName
          });

        alert(`${userName} inserido com sucesso.`);

        handleGetUsers();

        setUserName("");
        }else{
          await axios.put("http://localhost:8080/users", {
            id: selectedId,
            nome: userName
          });

          alert(`Usuário alterado com sucesso`);

          handleGetUsers();

          setUserName("");
          setSelectedId(-1);
        }

    }

    const handleSelectedUser = (id : number) => {
      const user = users.find((user : User) => user.id === id);

      if(user){
        setUserName(user.nome);
        setSelectedId(user.id);
      }
    }

    const handleDeleteUser = async (id: number) => {
        await axios.delete(`http://localhost:8080/users?=${id}`);

      alert("Usuário removido com sucesso.");

      handleGetUsers();
    }

    const handleOnInputChnage = (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    };

  return (
    <>
    <input placeholder='nome' onChange={handleOnInputChnage}value={userName.length > 0 ? userName: " "}/>
      <button onClick={handleAddOrUpdateUser}>Salvar</button>
      <button onClick={handleGetUsers}>Listar</button>

      <table style={{margin: "100px 0"}}>
        <tbody>
          <tr>
            <th>Id</th>
            <th style={{width: "500px"}}>Nome</th>
          </tr>
          {users.map((user) => (

            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td><button onClick={() => {handleDeleteUser(user.id)}}>Remover</button></td>
              <td><button onClick={() => {handleSelectedUser(user.id)}}>Alterar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
