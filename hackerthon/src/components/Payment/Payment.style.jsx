import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  padding-top: 30px;
  height: 535px;
`;
const Title = styled.h2`
  margin-top: 0px;
  padding-top: 10px;
`;

const Container = styled.div`
  background-color: white;
  width: 210px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-bottom: 30px;
  padding-top: 10px;
  border-radius: 10px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  padding-top: 0px;
  margin-top: 9px;
`;
export { Wrapper, Title, Container, Text };
