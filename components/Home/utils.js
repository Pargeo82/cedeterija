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

const netoTezina = function (params) {
  if (media(params) === "CD") {
    return quantity(params) * 100;
  } else if (media(params) === "LP") {
    return quantity(params) * 400;
  }
};

const stilovi = function (params) {
  let prikazaniStilovi = [];
  params.results[0].style &&
    params.results[0].style.map((stil) => {
      prikazaniStilovi.push(stil);
    });
  if (prikazaniStilovi.length > 3) {
    prikazaniStilovi.length = 3;
  }
  return prikazaniStilovi.join(", ");
};

export { titleEnd, media, quantity, netoTezina, stilovi };
