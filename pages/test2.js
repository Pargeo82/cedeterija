import { useState } from "react";
import Form from "../components/Form";

const defaultAPI = [
  "https://api.discogs.com/database/search?type=master&q=63757708322",
  "https://api.discogs.com/database/search?type=master&q=3460503700529",
];
const fetchRelease = "http://api.discogs.com/database/search?type=master&q=";

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
  const [barcodes, setBarcodes] = useState([]);

  const addBarcode = (barcode) => {
    setBarcodes([...barcodes, barcode]);
  };

  let barcodeArray = [];
  function barcodeInputToArray(params) {
    barcodeArray = params.toString().split("\n");
    barcodeArray.pop();
    return barcodeArray;
  }
  barcodeInputToArray(barcodes);
  // console.log(`${fetchRelease}${element}`)
  barcodeArray.map((element) => {
    const elementAPI = `${fetchRelease}${element}`;
    console.log(elementAPI);
    async function getData(props) {
      const res = await fetch(props, { headers: headers });
      const data = await res.json();

      return {
        props: {
          results: data,
        },
      };
    }
    getData(elementAPI);
  });

  return (
    <>
      {/* <Form addBarcode={addBarcode} /> */}
      <div></div>
      {console.log(results)}
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
