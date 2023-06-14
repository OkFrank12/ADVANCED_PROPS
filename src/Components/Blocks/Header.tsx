import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <NavsHolder>
            <Navs to={"/"}>Home</Navs>
            <Navs to={"/about"}>About</Navs>
            <Navs to={"/contact"}>Contact</Navs>
          </NavsHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  font-weight: 700;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled(NavLink)`
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
  color: white;

  :hover{
    color: grey;
  }
`;
