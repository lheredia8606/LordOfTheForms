import { Component } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { User } from "../User";
import { ClassForm } from "./Components/ClassForm";

export class ClassApp extends Component {
  state = {
    userData: new User("", "", "", "", ""),
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
