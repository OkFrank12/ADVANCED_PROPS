import styled from "styled-components";
import SocialBtn from "../Components/Static/SocialBtn";

const SignUp = () => {
  return (
    <div>
      <Container>
        <Main>
          <Card>Sign up</Card>
          <SocialBtn title="Google" icon="Ic"/>
        </Main>
      </Container>
    </div>
  );
};

export default SignUp;

const Container = styled.div`
  background-color: #fff;
  width: 350px;
  min-height: 100px;
  padding: 20px 0;
  border-radius: 5px;
  /* box-shadow: */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid sienna;
`;

const Main = styled.div``;

const Card = styled.div``;
