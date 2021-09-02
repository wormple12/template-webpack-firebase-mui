import { default as React, useState } from 'react';
import './InputField.scss';

type Props = {
  id?: string;
  className?: string;
  label?: string;
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>> | ((value: string) => void);
  hasClearButton?: boolean;
  onClick?: () => void; onFocus?: () => void; onBlur?: () => void;
  inputAttributes: React.HTMLProps<HTMLInputElement>;
};

export const InputField: React.FC<Props> = (props) => {
  const [hasInputFocus, setHasInputFocus] = useState(false);

  const inputFocusEvents = {
    onFocus: () => {
      setHasInputFocus(true);
      if (props.onFocus) props.onFocus();
    },
    onBlur: () => {
      setHasInputFocus(false);
      if (props.onBlur) props.onBlur();
    },
  };

  const type = props.inputAttributes.type ? props.inputAttributes.type : 'text';
  const hasClearButton = props.hasClearButton && props.inputAttributes.id && !hasInputFocus;

  return (
    <div
      id={props.id && props.id}
      className={`input-container ${props.className && props.className}`}
      onClick={props.onClick}
    >
      {props.label &&
        <label className="input-label" htmlFor={props.id && `${props.id}-field`}>
          {props.label}
        </label>
      }
      <input
        id={props.id && `${props.id}-field`}
        className={props.label ? "with-label" : "without-label"}
        value={props.value}
        type={type}
        onChange={(e) => {
          if (props.setValue) props.setValue(e.target.value);
        }}
        {...props.inputAttributes}
        {...inputFocusEvents}
      />
      {hasClearButton && (
        <div
          className="input-clear-button"
          onClick={() => {
            if (props.setValue) props.setValue('');
            if (props.inputAttributes.id)
              document.getElementById(props.inputAttributes.id)?.focus();
          }}
        >
          {/* <InputEditIcon /> */}
        </div>
      )}
      {props.children}
    </div>
  );
};
