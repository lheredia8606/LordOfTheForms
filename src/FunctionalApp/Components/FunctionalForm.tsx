import { useState } from "react";
import { TextInputComponent } from "./TextInputComponent";
import { PhoneInputComponent } from "./PhoneInputComponent";
import {
  isCityInvalid,
  isEmailInvalid,
  isNameInvalid,
  isPhoneInvalid,
  isUserValid,
} from "../../utils/validations";
import { ErrorMessage, phoneFormat } from "../../utils/InitialData";
import { capitalize } from "../../utils/transformations";
import { User } from "../../utils/types and interfaces";
export const FunctionalForm = ({
  setUserData,
}: {
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(["", "", "", ""]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const restartInputs = () => {
    setFirstName("");
    setLastName("");
    setCity("");
    setEmail("");
    setPhoneNumber(["", "", "", ""]);
    setIsSubmitted(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmitted(true);
        const userData: User = {
          firstName: capitalize(firstName),
          lastName: capitalize(lastName),
          email,
          city,
          phone: phoneNumber.join(""),
        };
        if (isUserValid(userData)) {
          setUserData(userData);
          restartInputs();
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
            setFirstName(e.target.value);
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
            setLastName(e.target.value);
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
            setEmail(e.target.value);
          },
        }}
        isSubmitted={isSubmitted}
        labelValue="Email"
        isInputInvalid={isEmailInvalid(email)}
      />

      {/* City Input */}
      <TextInputComponent
        errorMessage={ErrorMessage.city}
        inputProps={{
          onChange: (e) => {
            setCity(e.target.value);
          },
          list: "cities",
          placeholder: "City",
          value: city,
        }}
        isSubmitted={isSubmitted}
        labelValue="City"
        isInputInvalid={isCityInvalid(city)}
      />

      <PhoneInputComponent
        errorMessage={ErrorMessage.phoneNumber}
        isSubmitted={isSubmitted}
        labelValue="Phone:"
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        phoneFormat={phoneFormat}
        isInputInvalid={isPhoneInvalid(phoneNumber, phoneFormat)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
