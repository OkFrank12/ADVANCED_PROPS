import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Register: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Container>
        <Main>{children}</Main>
      </Container>
    </div>
  );
};

export default Register;

const Container = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 1px;
  background-image: url();
  background-position: top;
`;

const Main = styled.div``;
