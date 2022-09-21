import { useState } from "react";

export default function Form({ addBarcode }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let barcodeArray = message.toString().split("\n");
    barcodeArray.pop();
    addBarcode(barcodeArray);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="barcodes"></label>
          <textarea
            id="barcodes"
            name="barcodes"
            value={message}
            onChange={handleMessageChange}
            rows="20"
            column="30"
          />
          <button className="sub-form">Pošalji</button>
        </form>
      </div>
    </>
  );
}
