const titleEnd = function (params) {
  if (params.results[0]["format_quantity"] < 2 || !params.results[0]["format_quantity"]) {
    return `${media(params)}`;
  } else {
    return `${media(params)}${params.results[0]["format_quantity"]}`;
  }
};

const media = function (params) {
  if (params.results[0].format.includes("CD")) {
    return `CD`;
  } else if (params.results[0].format.includes("Vinyl")) {
    return `LP`;
  } else if (params.results[0].format.includes("SACD")) {
    return `SACD`;
  }
};

const webGrupa = function (params) {
  if (params.results[0].format.includes("CD")) {
    return `CD`;
  } else if (params.results[0].format.includes("Vinyl")) {
    return `LP`;
  } else if (params.results[0].format.includes("SACD")) {
    return `CD`;
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
  } else if (media(params) === "SACD") {
    return quantity(params) * 100;
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

const Naziv2 = function (params) {
  let title2 = params.results[0].title.split(" - ").shift().toUpperCase();
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
};

const Naziv3 = function (params) {
  let title3 = params.results[0].title.split(" - ").pop();
  if (title3.startsWith("The")) {
    return title3
      .slice(3)
      .replace(/\*/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  return title3
    .replace(/\*/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const Naziv = (params) => {
  let fullTitle = `${Naziv2(params)} ${Naziv3(params)} ${titleEnd(params)}`;
  return fullTitle.substring(0, 80);
};

export { media, quantity, netoTezina, stilovi, Naziv2, Naziv3, Naziv, webGrupa };
