import { Component } from "react";
import { InputProps } from "../../utils/types and interfaces";

interface TextInputComponentProps {
  errorMessage: string;
  labelValue: string;
  inputProps: InputProps;
  isSubmitted: boolean;
  isInputInvalid: boolean;
}

export class TextInputComponent extends Component<TextInputComponentProps> {
  render() {
    const {
      errorMessage,
      inputProps,
      isInputInvalid,
      isSubmitted,
      labelValue,
    } = this.props;
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
}
