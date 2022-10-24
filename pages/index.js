import { useState } from "react";
import Footer from "../components/Footer/footer";
import Form from "../components/Form";
import DataSWR from "../components/Home/DataSWR";
import Upute from "../components/Home/upute";

export default function DiscogsAPI() {
  const [barcodes, setBarcodes] = useState([]);

  const addBarcode = (param) => {
    setBarcodes(param);
  };
  return (
    <div className="content">
      <div className="flex">
        <Form addBarcode={addBarcode} />
        <Upute />
      </div>
      <div>{barcodes.length > 0 && <DataSWR params={barcodes} />}</div>
      <Footer />
    </div>
  );
}
