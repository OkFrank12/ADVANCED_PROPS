export interface iProps {
  name?: boolean;
  email?: boolean;
  password?: boolean;
  confirm?: boolean;
  phone?: boolean;
  address?: boolean;

  name1?: string;
  namePlace?: string;

  email1?: string;
  emailPlace?: string;

  password1?: string;
  passwordPlace?: string;

  confirm1?: string;
  confirmPlace?: string;

  address1?: string;
  addressPlace?: string;

  phone1?: string;
  phonePlace?: string;
}

export interface iButton {
  c?: string;
  bg?: string;
  title?: string;
  onClick?: () => void;
}
