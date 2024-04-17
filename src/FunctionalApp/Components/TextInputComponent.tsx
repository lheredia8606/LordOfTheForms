import { InputProps } from "../../utils/types and interfaces";

type TextInputComponentProps = {
  errorMessage: string;
  labelValue: string;
  inputProps: InputProps;
  isSubmitted: boolean;
  isInputInvalid: boolean;
};

export function TextInputComponent({
  errorMessage,
  inputProps,
  labelValue,
  isSubmitted,
  isInputInvalid,
}: TextInputComponentProps) {
  const shouldShowError = isSubmitted && isInputInvalid;
  return (
    <>
      <div className="input-wrap">
        <label>{labelValue}:</label>
        <input {...inputProps} />
      </div>
      {shouldShowError && <div className="error-message">{errorMessage}</div>}
    </>
  );
}
