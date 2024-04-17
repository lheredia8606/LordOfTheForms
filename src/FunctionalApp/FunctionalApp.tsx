import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { User } from "../User";
import { FunctionalForm } from "./Components/FunctionalForm";

export const FunctionalApp = () => {
  const [userData, setUserData] = useState(new User("", "", "", "", ""));

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userData} />
      <FunctionalForm setUserData={setUserData} />
    </>
  );
};
