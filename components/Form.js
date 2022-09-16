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
    console.log(barcodeArray);
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

// const response = await fetch("/api/test3", {
//   method: "POST",
//   body: JSON.stringify({ message }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// const data = await response.json();
// console.log(message);
// console.log(data);

// import { useState } from "react";

// export default function Form({ addBarcode }) {
//   const [message, setMessage] = useState("");

//   const handleMessageChange = (event) => {
//     // 👇️ access textarea value
//     setMessage(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addBarcode(message);
//     setMessage("");
//   };

//   return (
//     <>
//       <div className="form">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="barcodes">Barcodes</label>
//           <textarea
//             id="barcodes"
//             name="barcodes"
//             value={message}
//             onChange={handleMessageChange}
//             rows="20"
//             column="30"
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }
