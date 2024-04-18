import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginThunkAction } from "../../../store/reducers/loginReducers";
import { useNavigate } from "react-router-dom";

interface LoginFormState {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, loginSuccess } = useAppSelector((state) => state.login);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    dispatch(
      loginThunkAction({
        userName: formState.username,
        password: formState.password,
      })
    );
  };
  if (loginSuccess) {
    navigate("/countries");
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        {isLoading ? "Loading.." : <button type="submit">Login</button>}
      </form>
    </div>
  );
};

export default Login;
