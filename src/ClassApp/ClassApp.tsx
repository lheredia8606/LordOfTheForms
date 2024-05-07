import { Component } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { ClassForm } from "./Components/ClassForm";
import { User } from "../utils/types and interfaces";

interface ClassAppState {
  userData: User | null;
}

export class ClassApp extends Component {
  state = {
    userData: null,
  };

  setUserData = (userData: User) => {
    this.setState({ userData });
  };
  render() {
    return (
      <>
        <h2>Functional</h2>
        <ProfileInformation userData={this.state.userData} />
        <ClassForm setUserData={this.setUserData} />
      </>
    );
  }
}
