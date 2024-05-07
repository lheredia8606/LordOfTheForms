import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./Components/FunctionalForm";
import { User } from "../utils/types and interfaces";

export const FunctionalApp = () => {
  const [userData, setUserData] = useState<null | User>(null);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userData} />
      <FunctionalForm setUserData={setUserData} />
    </>
  );
};
