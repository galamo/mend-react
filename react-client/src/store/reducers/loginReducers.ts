import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export type LoginGlobalState = {
  isLoading: boolean;
  loginSuccess: boolean;
};

export const initialState = {
  isLoading: false,
  loginSuccess: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    return getLoginBuilderCasesFunction(builder);
  },
});

function getLoginBuilderCasesFunction(
  builder: ActionReducerMapBuilder<LoginGlobalState>
) {
  builder
    .addCase(loginThunkAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginThunkAction.fulfilled, (state) => {
      state.isLoading = false;
      state.loginSuccess = true;
    })
    .addCase(loginThunkAction.rejected, (state) => {
      state.isLoading = false;
    });
}

export const loginThunkAction = createAsyncThunk(
  "login-api",
  async function (obj: { userName: string; password: string }) {
    try {
      const { data } = await axios.post("http://localhost:2200/auth/login", {
        userName: obj.userName,
        password: obj.password,
      });
      window.localStorage.setItem("token", data.token); // usually more correct from action
    } catch (error) {
      console.log("Do something with error!!");
    }
  }
);

// export const { } = loginSlice.actions;
export default loginSlice.reducer;
