import React from "react";
import Help from "../components/HeadComponent/Help";
import Order from "../components/Order/Order";
import Options from "../components/Order/Options";
import Soup from "./soup.png";
import 떡볶이 from "./떡볶이.jpg";
import 김밥 from "./김밥.jpeg";
import 소세지김밥 from "../pages/김밥/소세지김밥.jpg";
import 새우튀김김밥 from "../pages/김밥/새우튀김김밥.jpg";
import 다이어트김밥 from "../pages/김밥/다이어트김밥.jpg";
import 치즈김밥 from "../pages/김밥/치즈김밥.jpg";
import 비빔면 from "../pages/김밥/비빔면.jpg";
import { useState } from "react";

function OrderPage() {
  const data = [
    { id: 1, name: "떡만둣국", imageSrc: Soup, price: "2500" },
    { id: 2, name: "떡볶이", imageSrc: 떡볶이, price: "2500" },
    { id: 3, name: "김밥", imageSrc: 김밥, price: "2500" },
  ];

  const Kdata = [
    {
      id: 4,
      name: "소세지김밥",
      imageSrc: 소세지김밥,
      price: "4000",
    },
    {
      id: 5,
      name: "김밥",
      imageSrc: 김밥,
      price: "2500",
    },
    {
      id: 6,
      name: "새우튀김김밥",
      imageSrc: 새우튀김김밥,
      price: "5500",
    },
    {
      id: 7,
      name: "다이어트김밥",
      imageSrc: 다이어트김밥,
      price: "4500",
    },
    {
      id: 8,
      name: "치즈김밥",
      imageSrc: 치즈김밥,
      price: "3500",
    },
  ];
  const Bdata = [
    { id: 1, name: "떡만둣국", imageSrc: Soup, price: "2500" },
    { id: 2, name: "떡볶이", imageSrc: 떡볶이, price: "2500" },
    { id: 3, name: "비빔면", imageSrc: 비빔면, price: "3500" },
  ];

  const [selectedData, setSelectedData] = useState([]);

  const handleOrder = (item) => {
    const existingItem = selectedData.find(
      (selectedItem) => selectedItem.id === item.id
    );

    if (existingItem) {
      // 만약 선택된 메뉴가 이미 selectedData 배열에 존재하면, 수량을 업데이트합니다.
      const updatedData = selectedData.map((selectedItem) =>
        selectedItem.id === item.id
          ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
          : selectedItem
      );
      setSelectedData(updatedData);
    } else {
      // 선택된 메뉴가 selectedData 배열에 존재하지 않는 경우, 수량 1로 추가합니다.
      setSelectedData([...selectedData, { ...item, quantity: 1 }]);
    }
  };

  const handleClear = () => {
    setSelectedData([]);
  };

  return (
    <div>
      <Help />
      <Order
        data={data}
        Kdata={Kdata}
        Bdata={Bdata}
        handleOrder={handleOrder}
      />
      <Options selectedData={selectedData} handleClear={handleClear} />;
    </div>
  );
}

export default OrderPage;
