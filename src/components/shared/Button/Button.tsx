import { default as React } from 'react';

import './Button.scss';

interface Props {
  variant?: 'default' | 'alt';
  onClick?: () => void;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  form?: string;
  autoFocus?: boolean;
}

export const Button: React.FC<Props> = props => {
  const variant = props.variant || 'default';
  const className = `button button-${variant}`;
  const type = props.type || 'button';

  return (
    <button
      autoFocus={props.autoFocus}
      className={className}
      onClick={props.onClick}
      type={type}
      form={props.form}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
