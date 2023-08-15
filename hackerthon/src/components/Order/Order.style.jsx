import { styled } from "styled-components";
import Order from "./Order";

const Wrapper = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 5px;
`;

const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 3px;
  margin-right: 3px;
  margin-left: 3px;
`;

const Menu = styled.div`
  background-color: #dfdcdc;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap; /* Add this line to wrap items */
  justify-content: space-around;
  height: 340px;
  margin: 10px 10px;
  padding: 10px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.2);
  height: 150px;
`;

const Price = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: rgb(83, 83, 83);
  margin-top: 0px;
  margin-bottom: 3px;
`;

const Name = styled.p`
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 4px;
`;
export { ImgWrapper, Wrapper, Category, Menu, Item, Price, Name };
