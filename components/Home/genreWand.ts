import { Album } from "types";

const genreWand = (params: Album) => {
  let genre = params.genre[0];
  const stilovi: string[] = [];
  params.style &&
    params.style.map((stil) => {
      stilovi.push(stil);
    });

  switch (genre) {
    case "Jazz":
      genre = "/JAZZ";
      break;
    case "Pop":
      if (stilovi && stilovi.includes("K-pop")) {
        genre = "/K-POP";
      } else if (stilovi && stilovi.includes("Prog Rock")) {
        genre = "/PROGR";
      } else genre = "/POP";
      break;
    case "Electronic":
      if (
        stilovi &&
        (stilovi.includes("Art Rock") || stilovi.includes("Pop Rock"))
      ) {
        genre = "/POP";
      } else genre = "/ELEC";
      break;
    case "Classical":
      genre = "/CLAS";
      break;
    case "Blues":
      genre = "/BLUE";
      break;
    case "Folk, World, & Country":
      genre = "/COUN";
      break;
    case "Gospel":
      genre = "/GOSP";
      break;
    case "Hard Rock":
      genre = "/HARD";
      break;
    case "New Age":
      genre = "/NEWA";
      break;
    case "K-Pop":
      genre = "/POP-K";
      break;
    case "Punk":
      genre = "/PUNK";
      break;
    case "R&B":
      genre = "/R&B";
      break;
    case "Soul":
      genre = "/R&B";
      break;
    case "Funk":
      genre = "/R&B";
      break;
    case "Funk / Soul":
      genre = "/R&B";
      break;
    case "Rap":
      if (stilovi && stilovi.includes("K-pop")) {
        genre = "/K-POP";
      } else genre = "/RAP";
      break;
    case "Hip Hop":
      if (stilovi && stilovi.includes("K-pop")) {
        genre = "/K-POP";
      } else genre = "/RAP";
      break;
    case "Reggae":
      genre = "/REGG";
      break;
    case "World":
      genre = "/WORL";
      break;
    case "Soundtrack":
      genre = "/SOUN";
      break;
    case "Rock":
      if (stilovi && stilovi.includes("Punk")) {
        genre = "/PUNK";
      } else if (stilovi && stilovi.includes("Country Rock")) {
        genre = "/COUN";
      } else if (stilovi && stilovi.includes("Alternative Rock")) {
        genre = "/ALTE";
      } else if (stilovi && stilovi.includes("Indie Rock")) {
        genre = "/ALTE";
      } else if (stilovi && stilovi.includes("Classic Rock")) {
        genre = "/POP";
      } else if (stilovi && stilovi.includes("Prog Rock")) {
        genre = "/PROGR";
      } else if (stilovi && stilovi.includes("Heavy Metal")) {
        genre = "/META";
      } else if (stilovi && stilovi.includes("Progressive Metal")) {
        genre = "/PROGM";
      } else genre = "/POP";
      break;
  }
  return genre;
};

export default genreWand;
