import React from "react";
import styled from "styled-components";

interface iSocial {
    title?: string;
    icon?: string;
}

const SocialBtn: React.FC<iSocial> = ({ title, icon }) => {
  return (
    <div>
      <Container>
        <Main>
          <Icon>{icon}</Icon>
          <span>{title}</span>
        </Main>
      </Container>
    </div>
  );
};

export default SocialBtn;

const Container = styled.div`
  border: 1px solid sienna;
  border-radius: 30px;
  padding: 6px 25px;
  font-size: 13px;
  transition: all 350ms;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const Main = styled.div`
  opacity: 0.8;
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const Icon = styled.div`
  margin-right: 5px;
`;
