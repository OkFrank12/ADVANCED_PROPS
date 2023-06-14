import styled from "styled-components";
import { iButton } from "../../utils/Interface";

const Button: React.FC<iButton> = ({onClick,c, bg, title}) => {
  return (
    <div>
      <Container onClick={onClick}>
        <Main c={`${c}`} bg={`${bg}`}>{title}</Main>
      </Container>
    </div>
  );
};

export default Button;

const Main = styled.div<{
  bg: string;
  c: string;
}>`
  width: 150px;
  height: 40px;
  border: 1px solid silver;
  background-color: ${({bg}) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({c}) => c};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  transition: all 300ms;
  cursor: pointer;
  :hover{
    transform: translate(0, -3px);
  }
`;

const Container = styled.div``;
