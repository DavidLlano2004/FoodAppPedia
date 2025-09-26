import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  phone: string;
  address: string;
  birthday: string;
}

const initialState: AuthState = {
  id: "",
  email: "",
  fullName: "",
  phone: "",
  address: "",
  userName: "",
  birthday: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginCase: (state, action: PayloadAction<AuthState>) => {
      return { ...state, ...action.payload };
    },
    singOffCase: () => initialState,
  },
});

export const { loginCase, singOffCase } = authSlice.actions;
export default authSlice.reducer;
