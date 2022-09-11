import { useState } from "react";
import styles from "../components/Home/home.module.css";
import Form from "../components/Form";

const defaultAPI = "http://api.discogs.com/database/search?type=master&q=63757708322";
const fetchRelease = "http://api.discogs.com/database/search?type=master";

let headers = new Headers({
  "User-Agent": "LearningHowToDoIt/0.1",
  Authorization: process.env.TOKEN,
});

export async function getServerSideProps() {
  const res = await fetch(defaultAPI, { headers: headers });
  const data = await res.json();

  return {
    props: {
      results: data,
    },
  };
}

export default function Test({ results }) {
  let barcodeArray = [];
  const [barcodes, setBarcodes] = useState([]);

  const addBarcode = (barcode) => {
    setBarcodes([...barcodes, barcode]);
  };

  return (
    <>
      <Form addBarcode={addBarcode} />
      <div>
        {(barcodeArray = barcodes.toString().split("\n"))}
        {barcodeArray.pop()}
        {console.log(barcodeArray)}
        {barcodeArray.forEach((element) => {
          console.log(`${fetchRelease}${element}`);
        })}
      </div>
    </>
    // <div>
    //   <ul>
    //     <li className="flex">
    //       <div>
    //         <p>{barcode}</p>
    //       </div>
    //       <div>
    //         <p>{results.results && results.results[0].title.split(" - ").shift()}</p>
    //       </div>
    //       <div>
    //         <p>{results.results && results.results[0].title.split(" - ").pop()}</p>
    //       </div>
    //       <div>
    //         <p>{results.results && results.results[0].catno}</p>
    //       </div>
    //       <div>
    //         <p>{results.results && results.results[0].genre[0]}</p>
    //       </div>
    //       <div>
    //         <p>{results.results && results.results[0].year}</p>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
  );
}
