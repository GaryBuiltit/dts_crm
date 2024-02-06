import React from "react";
import "../output.css";

const Contact = (props) => {
  return (
    <tr className="hover">
      <th>{props.index}</th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.lastPurchase}</td>
      <td>
        <button className="btn btn-active btn-link text-blue-600">
          details
        </button>
      </td>
    </tr>
  );
};

export default Contact;
