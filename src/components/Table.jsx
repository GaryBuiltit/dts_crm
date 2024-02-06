import React from "react";
import Contact from "./Contact";

export default function Table() {
  return (
    <div className="overflow-x-auto bg-white mx-4 rounded-md mt-5 border-gray-400 drop-shadow-lg">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Last Purchase</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <Contact
            index="1"
            name="John Mcdonald"
            phone="111-333-4567"
            email="1@mail.com"
          />
          <Contact
            index="1"
            name="John"
            phone="111-333-4567"
            email="1@mail.com"
          />
          <Contact
            index="1"
            name="John"
            phone="111-333-4567"
            email="1@mail.com"
          />
          <Contact
            index="1"
            name="John"
            phone="111-333-4567"
            email="1@mail.com"
          />
          <Contact
            index="1"
            name="John"
            phone="111-333-4567"
            email="1@mail.com"
          />
        </tbody>
      </table>
    </div>
  );
}
