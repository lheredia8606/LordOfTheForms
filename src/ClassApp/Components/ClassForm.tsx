import { Component } from "react";
import { TextInputComponent } from "./TextInputComponent";
import { SelectInputComponent } from "./SelectInputComponent";
import { PhoneInputComponent } from "./PhoneInputComponent";
import {
  isCityInvalid,
  isEmailInvalid,
  isNameInvalid,
  isPhoneInvalid,
  isUserValid,
} from "../../utils/validations";
import { ErrorMessage, phoneFormat } from "../../utils/InitialData";
import { User } from "../../User";
import { capitalize } from "../../utils/transformations";

interface TClassFormProps {
  setUserData: (userData: User) => void;
}

export class ClassForm extends Component<TClassFormProps> {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phoneNumber: ["", "", "", ""],
    isSubmitted: false,
  };

  setPhoneNumber = (phoneNumber: string[]) => {
    this.setState({ phoneNumber });
  };
  restartInputs = () => {
    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ city: "" });
    this.setState({ phoneNumber: ["", "", "", ""] });
    this.setState({ isSubmitted: false });
  };

  render() {
    const { setUserData } = this.props;
    const { firstName, lastName, city, email, isSubmitted, phoneNumber } =
      this.state;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.setState({ isSubmitted: true });
          const userData = new User(
            capitalize(firstName),
            capitalize(lastName),
            email,
            city,
            phoneNumber.join("")
          );
          if (isUserValid(userData)) {
            setUserData(userData);
            this.restartInputs();
          } else {
            alert("Bad Data Inputs");
          }
        }}
      >
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <TextInputComponent
          errorMessage={ErrorMessage.firstName}
          inputProps={{
            placeholder: "Bilbo",
            value: firstName,
            onChange: (e) => {
              this.setState({ firstName: e.target.value });
            },
          }}
          isSubmitted={isSubmitted}
          labelValue="First Name"
          isInputInvalid={isNameInvalid(firstName, 2)}
        />

        {/* last name input */}
        <TextInputComponent
          errorMessage={ErrorMessage.lastName}
          inputProps={{
            placeholder: "Baggins",
            value: lastName,
            onChange: (e) => {
              this.setState({ lastName: e.target.value });
            },
          }}
          isSubmitted={isSubmitted}
          labelValue="Last Name"
          isInputInvalid={isNameInvalid(lastName, 2)}
        />

        {/* Email Input */}
        <TextInputComponent
          errorMessage={ErrorMessage.email}
          inputProps={{
            placeholder: "bilbo-baggins@adventurehobbits.net",
            value: email,
            onChange: (e) => {
              this.setState({ email: e.target.value });
            },
          }}
          isSubmitted={isSubmitted}
          labelValue="Email"
          isInputInvalid={isEmailInvalid(email)}
        />

        {/* City Input */}
        <SelectInputComponent
          errorMessage={ErrorMessage.city}
          isSubmitted={isSubmitted}
          labelValue="City"
          selectProps={{
            onChange: (e) => {
              this.setState({ city: e.target.value });
            },
          }}
          isInputInvalid={isCityInvalid(city)}
        />

        <PhoneInputComponent
          errorMessage={ErrorMessage.phoneNumber}
          isSubmitted={isSubmitted}
          labelValue="Phone:"
          setPhoneNumber={this.setPhoneNumber}
          phoneNumber={phoneNumber}
          phoneFormat={phoneFormat}
          isInputInvalid={isPhoneInvalid(phoneNumber, phoneFormat)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
