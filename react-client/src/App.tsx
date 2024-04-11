import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import { Country } from "./components/country";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { SingleUser, UserCard } from "./components/user";

const url = "https://randomuser.me/api?results=10";
function App() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios.get(url);
        const { data } = result;
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();

    return () => {
      // clean up
    };
  }, []);

  if (isLoading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  const filteredUsers = users.filter((user: SingleUser) => {
    return user?.name?.first.toLowerCase().includes(userName.toLowerCase());
  });
  return (
    <>
      <div>
        <h1> Users {userName}</h1>
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUserName(event.target.value);
          }}
          type="text"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {Array.isArray(filteredUsers) &&
          filteredUsers.map((singleUser: SingleUser) => {
            return (
              <UserCard
                key={`${singleUser.name.first}-${singleUser.name.last}`}
                user={singleUser}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
