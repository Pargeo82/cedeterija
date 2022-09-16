export default function barcodeInputToArray(params) {
  barcodeArray = params.toString().split("\n");
  barcodeArray.pop();
  return barcodeArray;
}
