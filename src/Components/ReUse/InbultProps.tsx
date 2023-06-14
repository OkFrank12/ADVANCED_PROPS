import React, { useContext } from "react";
import styled from "styled-components";
import { iProps } from "../../utils/Interface";
import { GlobalContext } from "../../Global/GlobalProvider";

const InbultProps: React.FC<iProps> = ({
  email1,
  emailPlace,
  password1,
  passwordPlace,
  confirm1,
  confirmPlace,
  name1,
  namePlace,
  name,
  email,
  password,
  confirm,
  address1,
  addressPlace,
  phone1,
  phonePlace,
  phone,
  address,
}) => {
  //   const [name, setName] = useState<boolean>(true);
  //   const [email, setEmail] = useState<boolean>(false);
  //   const [password, setPassword] = useState<boolean>(true);
  //   const [confirm, setConfirm] = useState<boolean>(false);
  const {
    actualName,
    actualEmail,
    setActualEmail,
    setActualName,
    actualPhone,
    setActualPhone,
    actualConfirm,
    setActualConfirm,
    actualAddress,
    setActualAddress,
  } = useContext(GlobalContext);
  return (
    <div>
      <Container>
        <Main>
          {name ? (
            <InputHolder>
              <Text>{name1}</Text>
              <InputText>
                <Input
                  placeholder={`${namePlace}`}
                  value={actualName}
                  onChange={(e: any) => {
                    setActualName(e.target.value);
                  }}
                />
              </InputText>
            </InputHolder>
          ) : null}

          {email ? (
            <InputHolder>
              <Text>{email1}</Text>
              <InputText>
                <Input
                  placeholder={`${emailPlace}`}
                  value={actualEmail}
                  onChange={(e: any) => {
                    setActualEmail(e.target.value);
                  }}
                />
              </InputText>
            </InputHolder>
          ) : null}

          {password ? (
            <InputHolder>
              <Text>{password1}</Text>
              <InputText>
                <Input
                  placeholder={`${passwordPlace}`}
                  value={actualConfirm}
                  onChange={(e: any) => {
                    setActualConfirm(e.target.value);
                  }}
                />
              </InputText>
            </InputHolder>
          ) : null}

          {confirm ? (
            <InputHolder>
              <Text>{confirm1}</Text>
              <InputText>
                <Input
                  placeholder={`${confirmPlace}`}
                  value={actualEmail}
                  onChange={(e: any) => {
                    setActualEmail(e.target.value);
                  }}
                />
              </InputText>
            </InputHolder>
          ) : null}

          {phone ? (
            <InputHolder>
              <Text>{phone1}</Text>
              <InputText>
                <Input
                  placeholder={`${phonePlace}`}
                  value={actualPhone}
                  onChange={(e: any) => {
                    setActualPhone(e.target.value);
                  }}
                />
              </InputText>
            </InputHolder>
          ) : null}

          {address ? (
            <InputHolder>
              <Text>{address1}</Text>
              <InputText>
                <Input
                  placeholder={`${addressPlace}`}
                  value={actualAddress}
                  onChange={(e: any) => {
                    setActualAddress(e.target.value);
                  }}
                />
              </InputText>
            </InputHolder>
          ) : null}
        </Main>
      </Container>
    </div>
  );
};

export default InbultProps;

const Container = styled.div``;

const Main = styled.div``;

const InputHolder = styled.div`
  width: 300px;
  height: 40px;
  border: 1px solid silver;
  border-radius: 3px;
  position: relative;
  margin: 20px 0;
`;

const Text = styled.div`
  position: absolute;
  top: -14px;
  background-color: #fff;
  left: 10px;
  margin: 0 5px;
  color: blue;
  font-weight: bold;
`;

const InputText = styled.div``;

const Input = styled.input`
  outline: none;
  border: 0px;
  width: 97%;
  height: 35px;
  margin-left: 1px;
  padding-left: 5px;

  ::placeholder {
    color: silver;
    font-size: 12px;
  }
`;
