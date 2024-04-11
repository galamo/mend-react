import { useState, useEffect, ChangeEvent } from "react";
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

function useAsyncApi<T>(fetchFunction: any, initialValue: T) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ errorMessage: string }>({
    errorMessage: "",
  });
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    async function fetchData() {
      try {
        console.log("this is useApi");
        setIsLoading(true);
        const result = await fetchFunction();
        setData(result);
      } catch (error: any) {
        setError({ errorMessage: error.message || "Default Error" });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      console.log("clean up useAsyncApi ");
    };
  }, [fetchFunction]);

  return { isLoading, data, error };
}

async function getUsersApi() {
  const url = "https://randomuser.me/api?results=10";
  const result = await axios.get(url);
  return result.data.results;
}
function UsersPage() {
  const [userName, setUserName] = useState("");

  const { isLoading, data, error } = useAsyncApi<Array<SingleUser>>(
    getUsersApi,
    []
  );
  const users = (Array.isArray(data) && data) || [];
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
        {error.errorMessage ? error.errorMessage : null}
        <Button
          onClick={() => {
            const sortedUsers = users.sort((a, b) => b.dob.age - a.dob.age);
            console.log(sortedUsers);
            // setUsers([...sortedUsers]);
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
