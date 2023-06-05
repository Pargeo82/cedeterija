import { Album } from "types";

export const titleEnd = (params: Album) => {
  if (params["format_quantity"] < 2 || !params["format_quantity"]) {
    return `${media(params)}`;
  } else {
    return `${media(params)}${params["format_quantity"]}`;
  }
};

export const media = (params: Album) => {
  if (params.format.includes("CD")) {
    return `CD`;
  } else if (params.format.includes("Vinyl")) {
    return `LP`;
  } else if (params.format.includes("SACD")) {
    return `SACD`;
  }
};

export const webGrupa = (params: Album) => {
  if (params.format.includes("CD")) {
    return `CD`;
  } else if (params.format.includes("Vinyl")) {
    return `LP`;
  } else if (params.format.includes("SACD")) {
    return `CD`;
  }
};

export const quantity = (params: Album) => {
  if (params["format_quantity"] < 2 || !params["format_quantity"]) {
    return 1;
  } else {
    return params["format_quantity"];
  }
};

export const netoTezina = (params: Album): number => {
  console.log(params);
  if (media(params) === "CD") {
    return quantity(params) * 100;
  } else if (media(params) === "LP") {
    return quantity(params) * 400;
  } else if (media(params) === "SACD") {
    return quantity(params) * 100;
  } else return 0;
};

export const stilovi = (params: Album) => {
  let prikazaniStilovi: string[] = [];
  params.style &&
    params.style.map((stil) => {
      prikazaniStilovi.push(stil);
    });
  if (prikazaniStilovi.length > 3) {
    prikazaniStilovi.length = 3;
  }
  return prikazaniStilovi.join(", ");
};

export const Naziv2 = (params: Album) => {
  let title2: string = "";
  if (params && params.title) {
    title2 = params.title.split(" - ").shift()!.toUpperCase();
    if (title2 === "VARIOUS") {
      return (title2 = "VARIOUS ARTISTS");
    } else if (title2.startsWith("THE")) {
      return title2
        .slice(3)
        .replace(/[*;]/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }
    return title2
      .replace(/[*;]/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  return title2;
};

export const Naziv3 = function (params: Album) {
  let title3 = params.title.split(" - ").pop();
  if (title3?.startsWith("The")) {
    return title3
      .slice(3)
      .replace(/\*/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  if (title3) {
    return title3
      .replace(/\*/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  return "";
};

export const Naziv = (params: Album) => {
  let fullTitle = `${Naziv2(params)} ${Naziv3(params)} ${titleEnd(params)}`;
  return fullTitle.substring(0, 80);
};
