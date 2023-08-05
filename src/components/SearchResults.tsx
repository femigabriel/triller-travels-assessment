import React, { useState } from "react";
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
const british = "./images/british.png";
const WizzAir = "./images/WizzAir.png";
const airline = "./images/airline.png";
import { ResponseFetchTickets } from "@/services/ApiServices";

interface Props {
  data: ResponseFetchTickets[];
}
export const SearchResults = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<
    ResponseFetchTickets | undefined
  >(undefined);

  const tickets = [
    {
      id: 1,
      logo: (
        <div className="flex justify-center items-center ">
          <img src={british} className="w-[100px] " alt="logo" />
        </div>
      ),
      class: "",
      departDate: "11/11/2019",
      departTime: "7:43pm",
      button: (
        <Button className="bg-[#000] text-white rounded-[30px] text-[14px] max-w-[80px] mt-7 mb-1 ">
          0 stops
        </Button>
      ),
      duration: "8 hours 23 mins",
      arriveDate: "12/11/2019",
      arriveTime: " 2:45pm",
      price: 856,
    },
    {
      id: 2,
      logo: (
        <div className="flex justify-center items-center  mt-5">
          <img src={WizzAir} className="w-[70px] h-[45px]" alt="logo" />
        </div>
      ),
      class: "",
      departDate: "11/11/2019",
      departTime: "7:43pm",
      button: (
        <Button className="bg-[#000] text-white rounded-[30px] text-[14px] max-w-[80px] mt-7 mb-1">
          0 stops
        </Button>
      ),
      duration: "5 hours 45 mins",
      arriveDate: "12/11/2019",
      arriveTime: " 1:21pm",
      price: 980,
    },
    {
      id: 3,
      logo: (
        <div className="flex justify-center items-center ">
          <img src={british} className="w-[100px] h-[45px " alt="logo" />
        </div>
      ),
      class: "",
      departDate: "11/11/2019",
      departTime: "7:43pm",
      button: (
        <Button className=" bg-red-500 text-white rounded-[30px] text-[14px]max-w-[80px]mt-7 mb-1">
          1 stops
        </Button>
      ),
      duration: "12 hours 57 mins",
      arriveDate: "12/11/2019",
      arriveTime: " 3:56pm",
      price: 1012,
    },
    {
      id: 4,
      logo: <img src={british} className="w-[100px] h-[45px" alt="logo" />,
      class: "",
      departDate: "11/11/2019",
      departTime: "7:43pm",
      button: (
        <Button className="bg-[#000] text-white rounded-[30px] text-[14px] max-w-[80px] mt-7 mb-1 ">
          0 stops
        </Button>
      ),
      duration: "9 hours 43 mins",
      arriveDate: "12/11/2019",
      arriveTime: " 8:45pm",
      price: 908,
    },
    {
      id: 5,
      logo: (
        <div className="flex justify-center items-center mt-10">
          <img src={airline} className="w-[100px] h-[45px" alt="logo" />
        </div>
      ),
      class: "",
      departDate: "11/11/2019",
      departTime: "7:43pm",
      button: (
        <Button className="bg-[#000] text-white rounded-[30px] text-[14px] max-w-[80px] mt-7 mb-1">
          0 stops
        </Button>
      ),
      duration: "8 hours 23 mins",
      arriveDate: "12/11/2019",
      arriveTime: " 3:06pm",
      price: 765,
    },
  ];
  return (
    <div className="py-10 px-10 search-report w-full">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-[30px] text-[#555]">Search results</h1>
          <p className="text-[#999] text-[14px]">we found 15 results</p>
        </div>
        <nav className="flex results_menu">
          <li className="text-[#999] bg-white rounded-[30px] mx-3">cheapest</li>
          <li className="text-[#999] bg-white rounded-[30px] mx-3">shortest</li>
          <li className="text-[#fff] bg-blue-500 rounded-[30px] mx-3">
            recomended
          </li>
        </nav>
      </div>
      <div className="flex text-[30px] text-[#555] mb-10 font-semibold">
        <h1 className="">London</h1>
        <ArrowRightOutlined className="mx-7 mt-2" />
        <h1 className="">New York</h1>
      </div>
      <div>
        {tickets?.map((list) => {
          return (
            <div className="bg-white grid grid-cols-5  w-full shadow-sm mb-3 px-5 py-5 rounded-[8px] h-[125px] flight-card">
              <div>{list.logo}</div>
              <div className="flex flex-col">
                <span className="text-[14px] text-gray-400 mb-2">Depart</span>
                <span className="text-[#555] text-[16px]">
                  {list.departDate}
                </span>
                <span className="text-[16px] font-semibold text-gray-600">
                  {list.departTime}
                </span>
              </div>
              <div className="flex flex-col duration">
                <span>{list.button}</span>
                <p className="text-[12px] text-gray-400 ">{list.duration}</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] text-gray-400 mb-2">Arrive</span>
                <span className="text-[#555] text-[16px]">
                  {list.arriveDate}
                </span>
                <span className="text-[16px] font-semibold text-gray-600">
                  {list.arriveTime}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] text-gray-400 mb-10">Price</span>
                <span className="text-[16px] font-semibold text-gray-600">
                  ${list.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" pt-1 flex w-full mb-10">
        <div className="p-3 py-1 bg-white rounded-[8px] cursor-pointer mr-2">
          <span className="text-[#555] text-[10px] flex justify-center mt-1.5">
            <LeftOutlined />
          </span>
        </div>
        <div className="p-3 py-1 bg-blue-500 rounded-[8px] mr-2">
          <span className="text-[#fff] text-[10px] font-semibold"> 1</span>
        </div>
        <div className="p-3 py-1 bg-white rounded-[8px] mr-2">
          <span className="text-[#555] text-[10px] font-semibold"> 2</span>
        </div>
        <div className="p-3 py-1 bg-white rounded-[8px] mr-2">
          <span className="text-[#555] text-[10px] font-semibold"> 3</span>
        </div>
        <div className="p-3 py-1 bg-white rounded-[8px] cursor-pointer mr-2">
          <span className="text-[#555] text-[10px] flex justify-center mt-1.5">
            <RightOutlined />
          </span>
        </div>
      </div>
    </div>
  );
};
