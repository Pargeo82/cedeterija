import { useState } from "react";

type FormProps = {
  addBarcodes: (barcodes: string[]) => void;
};

const Form = ({ addBarcodes }: FormProps) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let barcodesArray: string[] = [];

    // get string from form and turn it into array so you can do something with each entry
    let barcodeArrayPreArray = message.toString().split("\n");

    // possibly removing last empty row
    let ind = barcodeArrayPreArray.length;
    if (barcodeArrayPreArray[ind - 1].length === 0) {
      barcodeArrayPreArray.pop();
    }

    //  when importing data straight from log file in wand, we have unnecessary text
    if (barcodeArrayPreArray[0].includes("Artikl")) {
      barcodeArrayPreArray.map((barcode) => {
        let shiftInd = barcode.indexOf(":") + 1;
        barcode = barcode.slice(shiftInd).slice(0, 13).replace(/ /g, "");
        barcodesArray.push(barcode);
      });
    } else
      barcodeArrayPreArray.map((barcode) => {
        barcodesArray.push(barcode);
      });

    // passing data to SWR
    addBarcodes(barcodesArray);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="barcodes"></label>
        <textarea
          id="barcodes"
          name="barcodes"
          value={message}
          onChange={handleMessageChange}
          rows={20}
        />
        <button className="sub-form">Pošalji</button>
      </form>
    </div>
  );
};

export default Form;
