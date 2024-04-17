import { User } from "../User";
import { allCities } from "./InitialData";

export function isEmailInvalid(emailAddress: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !emailAddress.match(regex);
}

export function isNameInvalid(name: string, minChar: number): boolean {
  return name.length < minChar;
}

//returns true if all the char are digits
export function areAllDigits(input: string): boolean {
  return /^\d+$/.test(input);
}

export function isCityInvalid(city: string): boolean {
  return !allCities.includes(city);
}

export function isPhoneInvalid(phone: string[], phoneFormat: number[]) {
  if (phone.length != phoneFormat.length) {
    return true;
  }
  let isInvalid = false;
  phone.map((element, index) => {
    if (!areAllDigits(element) || phone[index].length != phoneFormat[index])
      isInvalid = true;
  });
  return isInvalid;
}

export function isUserValid(userToValidate: User): boolean {
  const { city, email, firstName, lastName, phone } = userToValidate;
  if (
    isCityInvalid(city) ||
    isNameInvalid(firstName, 2) ||
    isNameInvalid(lastName, 2) ||
    isEmailInvalid(email) ||
    !areAllDigits(phone)
  ) {
    return false;
  }
  return true;
}
