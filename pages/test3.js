import { useState } from "react";
import Form from "../components/Form";
import DataSWR from "../components/Home/DataSWR";
import TableResponse from "../components/Home/table";

export default function Form3() {
  const [barcodes, setBarcodes] = useState([]);

  const addBarcode = (param) => {
    setBarcodes(param);
  };
  let tableRes = DataSWR(barcodes);

  return (
    <>
      <Form addBarcode={addBarcode} />
      {tableRes}
    </>
  );
}
