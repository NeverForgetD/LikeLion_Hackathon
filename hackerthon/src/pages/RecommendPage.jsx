import React from "react";
import Help from "../components/HeadComponent/Help";
import Order from "../components/Order/Order";
import Options from "../components/Order/Options";
import Soup from "./soup.png";
import 떡볶이 from "./떡볶이.jpg";
import 김밥 from "./김밥.jpeg";

function RecommendPage() {
  const data = [
    { id: 1, name: "떡만둣국", imageSrc: Soup, price: "2500" },
    { id: 2, name: "떡볶이", imageSrc: 떡볶이, price: "2500" },
    { id: 3, name: "김밥", imageSrc: 김밥, price: "2500" },
  ];
  return (
    <div>
      <Help />
      <Order data={data} />
      <Options data={data} />;
    </div>
  );
}

export default RecommendPage;
