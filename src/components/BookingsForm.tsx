import React from "react";
import { Button, Input } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker, Select, InputNumber } from "antd";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
// const onChange = (value: number) => {
//   console.log("changed", value);
// };

export const BookingsForm = () => {
  return (
    <div className="px-7 py-7 ">
      <div className="mb-10">
        <h1 className="text-[30px] text-[#555]">
          Best flight deals with <br></br>
          <span className="font-bold text-gray-800">Tickets4U</span>
        </h1>
      </div>
      <div className="mb-7">
        <label className="text-[16px] font-semibold">Depart from</label>
        <div className="mt-1">
          <Input
            placeholder="London-All Airports, England, UK"
            className="h-[50px] text-[18px] font-semibold"
            prefix={
              <i
                className="fa fa-plane text-[#8888] mr-2"
                aria-hidden="true"
              ></i>
            }
          />
        </div>
      </div>
      <div className="mb-7">
        <label className="text-[16px] font-semibold">Arrive at</label>
        <div className="mt-1">
          <Input
            placeholder="New York-All Airports, New York, USA"
            className="h-[50px] text-[18px] font-semibold"
            prefix={
              <i
                className="fa fa-plane text-[#8888] mr-2"
                aria-hidden="true"
              ></i>
            }
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="mb-7 mr-3">
          <label className="text-[16px] font-semibold">Depart date </label>
          <div className="mt-1">
            <DatePicker
              onChange={onChange}
              placeholder="11-11-2019"
              className="h-[50px] text-[18px] font-semibold"
            />
          </div>
        </div>
        <div className="mb-7 ml-3 ">
          <label className="text-[16px] font-semibold">Arrive date</label>
          <div className="mt-1">
            <DatePicker
              onChange={onChange}
              placeholder="11-11-2019"
              className="h-[50px] text-[18px] font-semibold w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-full">
          <div className="mb-1 mr-3">
            <label className="text-[16px] font-semibold">Class </label>
          </div>
          <Select
            showSearch
            style={{ width: 220  }}
            placeholder="Select flight class"
            className="h-[50px] text-[18px] font-semibold "
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Economy",
              },
              {
                value: "2",
                label: "Premium ",
              },
              {
                value: "3",
                label: "Business",
              },
              {
                value: "4",
                label: "First class",
              },
            ]}
          />
        </div>
        <div className="mb-7 ml-3">
          <label className="text-[16px] font-semibold">Passangers</label>
          <div className="mt-1">
            <InputNumber
              min={1}
              max={10}
              defaultValue={2}
              //   onChange={onChange}
              className="h-[50px] text-[18px] font-semibold w-[120px] text-[#9999]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Button className="m-auto bg-blue-600 text-[#fff] text-[18px]  h-[55px] w-full  my-5">
          Find Flight
        </Button>
      </div>
    </div>
  );
};
