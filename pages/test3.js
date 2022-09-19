import { useState } from "react";
import Form from "../components/Form";
import DataSWR from "../components/Home/DataSWR";

export default function Form3() {
  const [barcodes, setBarcodes] = useState([]);

  const addBarcode = (param) => {
    setBarcodes(param);
  };

  return (
    <>
      <Form addBarcode={addBarcode} />
      {barcodes.length > 0 && <DataSWR params={barcodes} />}
    </>
  );
}
