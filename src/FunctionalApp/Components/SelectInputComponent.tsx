import { ComponentProps } from "react";
import { allCities } from "../../utils/InitialData";

type SelectProps = ComponentProps<"select">;

type SelectInputComponentProps = {
  errorMessage: string;
  selectProps: SelectProps;
  isSubmitted: boolean;
  labelValue: string;
  isInputInvalid: boolean;
};

export function SelectInputComponent({
  errorMessage,
  isSubmitted,
  labelValue,
  selectProps,
  isInputInvalid,
}: SelectInputComponentProps) {
  const shouldShowError = isSubmitted && isInputInvalid;

  return (
    <>
      <div className="input-wrap">
        <label>{labelValue}</label>
        <select {...selectProps}>
          <option value={""}></option>
          {allCities.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </div>
      {shouldShowError && <div className="error-message">{errorMessage}</div>}
    </>
  );
}
