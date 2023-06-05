import { useState } from "react";
import Footer from "../components/Footer/footer";
import Form from "../components/Form";
import DataSWR from "../components/Home/DataSWR";
import Upute from "../components/Home/Upute";

export default function DiscogsAPI() {
  const [barcodes, setBarcodes] = useState<string[]>([]);

  const addBarcodes = (param: string[]) => {
    setBarcodes(param);
  };
  return (
    <div className="content">
      <div className="flex">
        <Form addBarcodes={addBarcodes} />
        <Upute />
      </div>
      <div>{barcodes.length > 0 && <DataSWR barcodes={barcodes} />}</div>
      <Footer />
    </div>
  );
}
