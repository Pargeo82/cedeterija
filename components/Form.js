import { useState } from "react";

export default function Form({ addBarcode }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBarcode(message);
    setMessage("");
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="barcodes">Barcodes</label>
          <textarea
            id="barcodes"
            name="barcodes"
            value={message}
            onChange={handleMessageChange}
            rows="20"
            column="30"
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
