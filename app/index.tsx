import { Redirect } from "expo-router";
import React, { useState } from "react";

const FoodApp = () => {
  const [redirect, setRedirect] = useState(true);
  if (redirect) {
    return <Redirect href="/templateAuth/loadingAuth" />;
  }
  return <Redirect href="/home" />;
};

export default FoodApp;
