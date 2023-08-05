import React from "react";
import { Form } from "./Form";
import { SearchResults } from "./SearchResults";

export const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-full  py-20 home">
      <div className="flex w-full max-w-[1250px] bg-sky-50 rounded-[12px] homepage">
        <Form />
        <SearchResults data={[]} />
      </div>
    </div>
  );
};
