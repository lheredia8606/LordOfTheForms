import { ComponentProps } from "react";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

export type InputProps = ComponentProps<"input">;
