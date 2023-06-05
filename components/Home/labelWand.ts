import { Album } from "types";

const labelWand = (params: Album) => {
  let label = params.label[0];
  if (label.includes("Sony Classical")) {
    return (label = "SONYC");
  } else if (label.includes("Sony")) {
    return (label = "SONY");
  } else if (label.includes("Universal")) {
    return (label = "UNIV");
  } else if (label.includes("4AD")) {
    return (label = "4AD");
  } else if (label.includes("Atlantic")) {
    return (label = "ATLA");
  } else if (label.includes("BGO")) {
    return (label = "BGO");
  } else if (label.includes("Blue Note")) {
    return (label = "BLNOT");
  } else if (label.includes("BMG")) {
    return (label = "BMG");
  } else if (label.includes("Capitol")) {
    return (label = "CAPIT");
  } else if (label.includes("Century")) {
    return (label = "CENTM");
  } else if (label.includes("Columbia")) {
    return (label = "CLOUR");
  } else if (label.includes("CPO")) {
    return (label = "CPO");
  } else if (label.includes("Craft")) {
    return (label = "CRFR");
  } else if (label.includes("Decca")) {
    return (label = "DECCA");
  } else if (label.includes("Deutsche Grammophon")) {
    return (label = "DEUGR");
  } else if (label.includes("ECM")) {
    return (label = "ECM");
  } else if (label.includes("Epic")) {
    return (label = "EPIC");
  } else if (label.includes("Inside Out")) {
    return (label = "INOUT");
  } else if (label.includes("Island")) {
    return (label = "ISLAN");
  } else if (label.includes("Matador")) {
    return (label = "MATAD");
  } else if (label.includes("Mercury")) {
    return (label = "MERC");
  } else if (label.includes("Music On CD")) {
    return (label = "MOCD");
  } else if (label.includes("Music On Vinyl")) {
    return (label = "MOV");
  } else if (label.includes("Mute")) {
    return (label = "MUTE");
  } else if (label.includes("Napalm")) {
    return (label = "NAPAL");
  } else if (label.includes("Naxos")) {
    return (label = "NAXOS");
  } else if (label.includes("Nonesuch")) {
    return (label = "NONE");
  } else if (label.includes("Nuclear")) {
    return (label = "NUCLE");
  } else if (label.includes("Parlophone")) {
    return (label = "PARLO");
  } else if (label.includes("Polydor")) {
    return (label = "POLYD");
  } else if (label.includes("Provogue")) {
    return (label = "PROVO");
  } else if (label.includes("RCA")) {
    return (label = "RCAR");
  } else if (label.includes("Reprise")) {
    return (label = "REPRI");
  } else if (label.includes("Republic")) {
    return (label = "REPUB");
  } else if (label.includes("Rhino")) {
    return (label = "RHINO");
  } else if (label.includes("Rough")) {
    return (label = "ROUGH");
  } else if (label.includes("Verve")) {
    return (label = "VERVE");
  } else if (label.includes("Virgin")) {
    return (label = "VIRGI");
  } else if (label.includes("Warner")) {
    return (label = "WB");
  } else if (label.includes("XL")) {
    return (label = "XL");
  } else return label;
};

export default labelWand;
