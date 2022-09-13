import { useState } from "react";
import Form from "../components/Form";

export default function Form3() {
  const [barcodes, setBarcodes] = useState([]);

  const addBarcode = (barcode) => {
    setBarcodes([...barcodes, barcode]);
  };

  return (
    <>
      <Form addBarcode={addBarcode} />
      <div>{barcodes}</div>
    </>
  );
}
