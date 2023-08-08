import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Wrapper1 = styled.div`
  text-align: center;
  padding-top: 100px;
`;
const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 30px;
`;
const Button = styled.button`
  margin-top: 30px;
  width: 145px;
  height: 200px;
  margin-bottom: 200px;
  border: none;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  font-size: 20px;
  background-color: white;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #da5757;
  text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
`;

export { Wrapper1, Wrapper2, Wrapper, Title, Button };
