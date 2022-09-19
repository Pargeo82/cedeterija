// export default function barcodeInputToArray(params) {
//   barcodeArray = params.toString().split("\n");
//   barcodeArray.pop();
//   return barcodeArray;
// }

const titleEnd = function (params) {
  if (params.results[0]["format_quantity"] < 2 || !params.results[0]["format_quantity"]) {
    return `${params.results[0].format[0]}`;
  } else {
    return `${params.results[0].format[0]}${params.results[0]["format_quantity"]}`;
  }
};

const media = function (params) {
  if (params.results[0].format.includes("CD")) {
    return `CD`;
  } else if (params.results[0].format.includes("LP")) {
    return `LP`;
  }
};

const quantity = function (params) {
  if (params.results[0]["format_quantity"] < 2 || !params.results[0]["format_quantity"]) {
    return 1;
  } else return `${params.results[0]["format_quantity"]}`;
};

export { titleEnd, media, quantity };
