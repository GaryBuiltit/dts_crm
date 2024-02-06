import React from "react";
import "../output.css";
import { IoPersonAdd } from "react-icons/io5";
import Searchbar from "../components/Searchbar";
import Table from "../components/Table";

function Sellers() {
  return (
    <div id="sellers-page">
      <div className="flex items-center mt-6 ml-4">
        <h1 className="text-xl text-center md:text-left md:text-3xl font-semibold">
          Seller Contacts
        </h1>
        <button>
          <IoPersonAdd className="ml-3 size-8 fill-blue-500" />
        </button>
      </div>
      <Searchbar />
      <Table />
    </div>
  );
}

export default Sellers;
