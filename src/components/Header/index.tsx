import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

import logoImg from '../../assets/images/logo.svg';

type HeaderProps = {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={logoImg} alt="Letmeask" />
        </Link>

        <div>
          {children}
        </div>
      </div>
    </HeaderContainer>
  )
}