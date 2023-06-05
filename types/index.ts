export type Artist = {
  id: string;
  name: string;
  area: {
    id: string;
    name: string;
  };
  "begin-area": {
    id: string;
    name: string;
  };
  tags: {
    count: number;
    name: string;
  }[];
};

export type Album = {
  barcode: string[];
  calledBarcode: string;
  catno: string;
  country: string;
  format: string[];
  genre: string[];
  label: string[];
  style: string[];
  title: string;
  type: string;
  year: string;
  format_quantity: number;
  media: string;
};

export type AlbumResult = {
  results: {
    barcode: string[];
    calledBarcode: string;
    catno: string;
    country: string;
    format: string[];
    genre: string[];
    label: string[];
    style: string[];
    title: string;
    type: string;
    year: string;
    format_quantity: number;
    media: string;
  }[];
};
