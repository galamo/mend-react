import { useState, useEffect, ChangeEvent } from "react";
// import "./App.css";
// import { Country } from "./components/country";
import axios from "axios";
import { SingleUser, UserCard } from "../user/index";
import Button from "@mui/material/Button";
import { WithLoadingProps, withLoading } from "../hoc/withLoading";

type UsersProps = {
  users: Array<SingleUser>;
};
const UsersListWithLoading = withLoading<UsersProps & WithLoadingProps>(
  UsersList
);

const url = "https://randomuser.me/api?results=10";
function UsersPage() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState<Array<SingleUser>>([]);
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

  // if (isLoading)
  //   return (
  //     <div>
  //       <CircularProgress />
  //     </div>
  //   );

  const filteredUsers = users.filter((user: SingleUser) => {
    return user?.name?.first.toLowerCase().includes(userName.toLowerCase());
  });
  return (
    <>
      {/* <RouterProvider router={router} />; */}
      <div>
        <h1> Users {userName}</h1>
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUserName(event.target.value);
          }}
          type="text"
        />

        <Button
          onClick={() => {
            const sortedUsers = users.sort((a, b) => b.dob.age - a.dob.age);
            console.log(sortedUsers);
            setUsers([...sortedUsers]);
          }}
        >
          Sort by age
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <UsersListWithLoading users={filteredUsers} isLoading={isLoading} />
      </div>
    </>
  );
}

function UsersList(props: { users: Array<SingleUser> }) {
  return (
    <>
      {Array.isArray(props.users) &&
        props.users.map((singleUser: SingleUser) => {
          return (
            <UserCard
              key={`${singleUser.name.first}-${singleUser.name.last}`}
              user={singleUser}
            />
          );
        })}
    </>
  );
}
export default UsersPage;
