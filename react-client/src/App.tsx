import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
// import { Country } from "./components/country";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { SingleUser, UserCard } from "./components/user";
import Button from "@mui/material/Button";

//  new Type
type WithLoadingProps = {
  isLoading: boolean;
};
function withLoading<T extends WithLoadingProps>(
  WrappedComponent: React.FunctionComponent<T>
) {
  return function (props: T) {
    const { isLoading } = props;
    return isLoading ? <CircularProgress /> : <WrappedComponent {...props} />;
  };
}
type UsersProps = {
  users: Array<SingleUser>;
};
const UsersListWithLoading = withLoading<UsersProps & WithLoadingProps>(
  UsersList
);

const url = "https://randomuser.me/api?results=10";
function App() {
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
export default App;
