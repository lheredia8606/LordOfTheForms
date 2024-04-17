import { ChangeEvent, useRef } from "react";
import { areAllDigits } from "../../utils/validations";

type PhoneInputComponentProps = {
  errorMessage: string;
  labelValue: string;
  isSubmitted: boolean;
  phoneNumber: string[];
  setPhoneNumber: (phoneNumber: string[]) => void;
  isInputInvalid: boolean;
  phoneFormat: number[];
};

export function PhoneInputComponent({
  errorMessage,
  isSubmitted,
  labelValue,
  phoneNumber,
  setPhoneNumber,
  isInputInvalid,
  phoneFormat,
}: PhoneInputComponentProps) {
  const shouldShowError = isSubmitted && isInputInvalid;
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const [ref0, ref1, ref2, ref3] = refs;
  const onChangeHandler =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const nextRef = refs[index + 1];
      const shouldGoNext =
        nextRef?.current && e.target.value.length >= phoneFormat[index];
      const prevRef = refs[index - 1];
      const shouldGoPrev = prevRef?.current && e.target.value.length === 0;
      {
        const newState = phoneNumber.map((currentValue, currentIndex) => {
          return index === currentIndex
            ? phoneFormat[currentIndex] >= e.target.value.length
              ? areAllDigits(e.target.value) || e.target.value === ""
                ? e.target.value
                : currentValue
              : currentValue
            : currentValue;
        });
        setPhoneNumber(newState);
        if (shouldGoPrev) prevRef.current.focus();
        if (shouldGoNext) nextRef.current.focus();
      }
    };

  return (
    <>
      <div className="input-wrap">
        <label htmlFor="phone">{labelValue}</label>
        <div id="phone-input-wrap">
          <input
            type="text"
            id="phone-input-1"
            value={phoneNumber[0]}
            placeholder="55"
            ref={ref0}
            onChange={onChangeHandler(0)}
          />
          -
          <input
            type="text"
            id="phone-input-2"
            placeholder="55"
            value={phoneNumber[1]}
            ref={ref1}
            onChange={onChangeHandler(1)}
          />
          -
          <input
            type="text"
            id="phone-input-3"
            placeholder="55"
            value={phoneNumber[2]}
            ref={ref2}
            onChange={onChangeHandler(2)}
          />
          -
          <input
            type="text"
            id="phone-input-4"
            placeholder="5"
            value={phoneNumber[3]}
            ref={ref3}
            onChange={onChangeHandler(3)}
          />
        </div>
      </div>
      {shouldShowError && <div className="error-message">{errorMessage}</div>}
    </>
  );
}
