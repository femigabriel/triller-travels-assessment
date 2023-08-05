import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { BookingsForm } from "./BookingsForm";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex flex-col justify-center items-center">
        <i className="fa fa-plane text-white mb-1" aria-hidden="true"></i>
        <span className="text-[#fff]">Flight</span>
      </div>
    ),
    children: <BookingsForm />,
  },
  {
    key: "2",
    label: (
      <div className="flex flex-col justify-center items-center">
        <i className="fa fa-train mb-1" aria-hidden="true"></i>
        <span>Trains</span>
      </div>
    ),
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: (
      <div className="flex flex-col justify-center items-center">
        <i className="fa fa-ship mb-1" aria-hidden="true"></i>
        <span>Ships</span>
      </div>
    ),
    children: `Content of Tab Pane 3`,
  },
  {
    key: "4",
    label: (
      <div className="flex flex-col justify-center items-center">
        <i className="fa fa-car mb-1" aria-hidden="true"></i>
        <span>Cars</span>
      </div>
    ),
    children: `Content of Tab Pane 3`,
  },
];
export const Form = () => {
  return (
    <div className="w-full max-w-[450px] shadow-lg flightform">
      <div className="py-10">
        <h2 className="px-10 py-5 text-gray-800 font-bold text-[20px]">
          Tickets4U
        </h2>
        <Tabs onChange={onChange} type="card" items={items} />
      </div>
    </div>
  );
};
