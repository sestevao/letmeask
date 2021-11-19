import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnType: "fill" | "outline",
};

export function Button(props: ButtonProps) {
  return (
    <ButtonStyled
      {...props}
      btnType={props.btnType}
    >
      {props.children}
    </ButtonStyled>
  )
}