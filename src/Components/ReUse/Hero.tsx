import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import InbultProps from "./InbultProps";
import Button from "../Static/Button";
import { GlobalContext } from "../../Global/GlobalProvider";

const Hero = () => {
  const [counter, setCounter] = useState<number>(1);
  const [month, setMonth] = useState<string>("January");
  const {actualName, actualPhone, actualAddress} = useContext(GlobalContext);

  const onCount = () => {
    setCounter((el: number) => {
      return el + 1;
    });
  };

  const onMinus = () => {
    setCounter((el: number) => {
      if (el < 1) {
        return 30;
      } else {
        return el - 1;
      }
    });
  };

  return (
    <div>
      <Container>
        {/* <Main>
          <Icon onClick={onCount} />
          <Div>
            <Count>{(counter % 30) + 1}</Count>
            <Text>January</Text>
          </Div>
          <Icon onClick={onMinus} />
        </Main> */}
        {actualName}
        <InbultProps
          name
          name1="Name"
          namePlace="Enter your Name: "

          address
          address1="Address"
          addressPlace="Enter your Address: "

          phone
          phone1="Phone Number"
          phonePlace="Enter your Phone Number: "
        />
        <Button c="white" bg="green" title="submit" onClick={
            ()=> {
             console.log("Name: ", actualName);
             console.log("Address: ", actualAddress);
             console.log("Phone: ", actualPhone);
            }
        }/>
      </Container>
    </div>
  );
};

export default Hero;
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
`;
const Icon = styled(AiOutlineMenu)`
  cursor: pointer;
`;
const Div = styled.div`
  width: 200px;
  height: 250px;
  background-color: blue;
  border-radius: 15px;
  padding: 10px;
  font-size: 120px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  flex-direction: column;
  margin: 10px 0;
`;
const Count = styled.div``;

const Text = styled.div`
  font-size: 25px;
`;
