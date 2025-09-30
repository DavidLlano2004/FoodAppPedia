import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  id: string;
}

const initialState: AuthState = {
  id: "",
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
