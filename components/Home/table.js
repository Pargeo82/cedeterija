import { media, quantity, netoTezina, stilovi, Naziv2, Naziv3, Naziv, webGrupa } from "./utils";
import genreWand from "./genreWand";
import labelWand from "./labelWand";
import styles from "../../styles/home.module.css";

export default function TableResponse({ params }) {
  const existingTitles = params.filter((param) => param.results.length > 0);
  const Naslovi = existingTitles.map((title) => {
    return (
      <tr key={title.results[0].barcode[0]}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{title.results[0].catno}</td>
        <td>{Naziv(title)}</td>
        <td>{Naziv2(title)}</td>
        <td>{Naziv3(title)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>kom</td>
        <td>{quantity(title)}</td>
        <td>{netoTezina(title)}</td>
        <td>0</td>
        <td>g</td>
        <td>kom</td>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{labelWand(title)}</td>
        <td>{`${media(title)}00${quantity(title)}`}</td>
        <td>{genreWand(title)}</td>
        <td>{webGrupa(title)}</td>
        <td>{title.results[0].year}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>6</td>
        <td>1</td>
        <td>{title.results[0].country}</td>
        <td></td>
        <td>{stilovi(title)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          {title.results[0].barcode[0]
            ? `${title.results[0].barcode[0].replace(/\D/g, "")}`
            : `${title.results[0].catno.replace(/\D/g, "")}`}
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });
  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr className={styles["small-text-tr"]}>
            <th className={styles.smalltd}>LONG</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th>STRING(20)</th>
            <th>STRING(20)</th>
            <th>STRING(30)</th>
            <th>STRING(80)</th>
            <th>STRING(80)</th>
            <th>STRING(80)</th>
            <th className={styles.smalltd}>STRING(25)</th>
            <th className={styles.smalltd}>STRING(25)</th>
            <th className={styles.smalltd}>SHORT</th>
            <th className={styles.smalltd}>SHORT</th>
            <th>STRING(3)</th>
            <th>DECIMAL(11,4)</th>
            <th>DECIMAL(11,4)</th>
            <th>DECIMAL(11,4)</th>
            <th>STRING(20)</th>
            <th>STRING(20)</th>
            <th>DECIMAL(11,4)</th>
            <th className={styles.smalltd}>STRING(20)</th>
            <th className={styles.smalltd}>DECIMAL(11,4)</th>
            <th>LONG</th>
            <th>LONG</th>
            <th className={styles.smalltd}>DATE</th>
            <th className={styles.smalltd}>DATE</th>
            <th className={styles.smalltd}>DATE</th>
            <th className={styles.smalltd}>DATE</th>
            <th>STRING(5)</th>
            <th>STRING(5)</th>
            <th>STRING(5)</th>
            <th>STRING(5)</th>
            <th>STRING(6)</th>
            <th className={styles.smalltd}>STRING(6)</th>
            <th className={styles.smalltd}>STRING(6)</th>
            <th className={styles.smalltd}>ROB</th>
            <th className={styles.smalltd}>ROB</th>
            <th>STRING(10)a</th>
            <th>STRING(20)</th>
            <th>STRING(30)</th>
            <th className={styles.smalltd}>ROB: DRZ</th>
            <th>STRING(50)</th>
            <th className={styles.smalltd}>STRING(50)</th>
            <th className={styles.smalltd}>STRING(50)</th>
            <th className={styles.smalltd}>STRING(30)</th>
            <th className={styles.smalltd}>STRING(10)</th>
            <th className={styles.smalltd}>DECIMAL(5,3)</th>
            <th className={styles.smalltd}>DECIMAL(5,3)</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>ROB</th>
            <th className={styles.smalltd}>ROB</th>
            <th className={styles.smalltd}>ROB</th>
            <th className={styles.smalltd}>ROB</th>
            <th className={styles.smalltd}>ROB</th>
            <th className={styles.smalltd}>DECIMAL(13)</th>
            <th className={styles.smalltd}>DECIMAL(13,3)</th>
            <th className={styles.smalltd}>DECIMAL(13,3)</th>
            <th className={styles.smalltd}>DECIMAL(12,3)</th>
            <th className={styles.smalltd}>DECIMAL(11,3)</th>
            <th className={styles.smalltd}>DECIMAL(7,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,3)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(5,2)</th>
            <th className={styles.smalltd}>DECIMAL(5,2)</th>
            <th className={styles.smalltd}>DECIMAL(5,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(9,3)</th>
            <th className={styles.smalltd}>DECIMAL(9,3)</th>
            <th className={styles.smalltd}>DECIMAL(9,3)</th>
            <th className={styles.smalltd}>DECIMAL(9,3)</th>
            <th className={styles.smalltd}>DECIMAL(9,3)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(5,2)</th>
            <th className={styles.smalltd}>DECIMAL(5,2)</th>
            <th className={styles.smalltd}>DECIMAL(5,2)</th>
            <th className={styles.smalltd}>DECIMAL(5,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(11,2)</th>
            <th className={styles.smalltd}>DECIMAL(7,2)</th>
            <th className={styles.smalltd}>STRING(3)</th>
            <th className={styles.smalltd}>DECIMAL(12,8)</th>
            <th className={styles.smalltd}>SHORT</th>
            <th className={styles.smalltd}>SHORT</th>
            <th className={styles.smalltd}>DATE</th>
            <th className={styles.smalltd}>DATE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>BYTE</th>
            <th className={styles.smalltd}>STRING(64)</th>
          </tr>
          <tr>
            <th className={styles.smalltd}>Roba</th>
            <th className={styles.smalltd}>Vrsta</th>
            <th className={styles.smalltd}>Tip</th>
            <th>Šifra</th>
            <th>Grupa</th>
            <th>Kataloški</th>
            <th>Naziv</th>
            <th>Naziv 2</th>
            <th>Naziv 3</th>
            <th className={styles.smalltd}>WWW</th>
            <th className={styles.smalltd}>Slika</th>
            <th className={styles.smalltd}>SlikaW</th>
            <th className={styles.smalltd}>SlikaH</th>
            <th>Jedinica mjere</th>
            <th>Osnovno pak.</th>
            <th>Neto težina</th>
            <th>Bruto težina</th>
            <th>Mjerna jedinica</th>
            <th>Druga jedinica</th>
            <th>Međuodnos</th>
            <th className={styles.smalltd}>Dimenzije</th>
            <th className={styles.smalltd}>Zapremnina</th>
            <th>Proizvođač</th>
            <th>Dobavljač</th>
            <th className={styles.smalltd}>Dat.Prom</th>
            <th className={styles.smalltd}>Dat.Kom</th>
            <th className={styles.smalltd}>Dat.Ulaza</th>
            <th className={styles.smalltd}>Dat.Izlaza</th>
            <th>Label</th>
            <th>Format</th>
            <th>Žanr</th>
            <th>Web grupa</th>
            <th>Godina</th>
            <th className={styles.smalltd}>Ambalaža</th>
            <th className={styles.smalltd}>Ulazna troš</th>
            <th className={styles.smalltd}>Rezerva 1</th>
            <th className={styles.smalltd}>Rezerva 2</th>
            <th>Porezna tarifa</th>
            <th>Carinska tarifa</th>
            <th>Zemlja porijekla</th>
            <th className={styles.smalltd}>Država</th>
            <th>Dodatni žanrovi</th>
            <th className={styles.smalltd}>Atestni datum</th>
            <th className={styles.smalltd}>Jamstvo</th>
            <th className={styles.smalltd}>Skladišno mjesto</th>
            <th className={styles.smalltd}>Konto</th>
            <th className={styles.smalltd}>Dozv. kalo</th>
            <th className={styles.smalltd}>Ostalo</th>
            <th className={styles.smalltd}>Cjenik</th>
            <th className={styles.smalltd}>PPOM</th>
            <th className={styles.smalltd}>Trigonik</th>
            <th className={styles.smalltd}>Unos Serijskog Broja</th>
            <th className={styles.smalltd}>Registriran</th>
            <th className={styles.smalltd}>Proizvod</th>
            <th className={styles.smalltd}>ByteRezerva1</th>
            <th className={styles.smalltd}>ByteRezerva2</th>
            <th className={styles.smalltd}>ByteRezerva3</th>
            <th className={styles.smalltd}>ByteRezerva4</th>
            <th className={styles.smalltd}>ByteRezerva5</th>
            <th>Barcode</th>
            <th className={styles.smalltd}>Minimalna količina</th>
            <th className={styles.smalltd}>Optimalna količina</th>
            <th className={styles.smalltd}>Maksimalna količina</th>
            <th className={styles.smalltd}>Bruto devizna</th>
            <th className={styles.smalltd}>Rabat</th>
            <th className={styles.smalltd}>Neto devizna</th>
            <th className={styles.smalltd}>Cijena dobavljača</th>
            <th className={styles.smalltd}>Troškovi prije carine</th>
            <th className={styles.smalltd}>Carinski troškovi</th>
            <th className={styles.smalltd}>Ostali troškovi</th>
            <th className={styles.smalltd}>Nabavna cijena</th>
            <th className={styles.smalltd}>Stara cijena</th>
            <th className={styles.smalltd}>Marža</th>
            <th className={styles.smalltd}>Planska VPC</th>
            <th className={styles.smalltd}>Planska MPC</th>
            <th className={styles.smalltd}>Minimalna marža</th>
            <th className={styles.smalltd}>Maksimalna marža</th>
            <th className={styles.smalltd}>VPC</th>
            <th className={styles.smalltd}>Komisijska VPC</th>
            <th className={styles.smalltd}>VPC dealer</th>
            <th className={styles.smalltd}>PPT</th>
            <th className={styles.smalltd}>PPP</th>
            <th className={styles.smalltd}>PPU</th>
            <th className={styles.smalltd}>PPG</th>
            <th className={styles.smalltd}>MPC</th>
            <th className={styles.smalltd}>KomMPC</th>
            <th className={styles.smalltd}>TestVPC</th>
            <th className={styles.smalltd}>TestMPC</th>
            <th className={styles.smalltd}>Rabat - ne</th>
            <th className={styles.smalltd}>Šifra devize</th>
            <th className={styles.smalltd}>Tečaj planske kalkulacije</th>
            <th className={styles.smalltd}>Kreirao</th>
            <th className={styles.smalltd}>Mijenjao</th>
            <th className={styles.smalltd}>Datum Unosa</th>
            <th className={styles.smalltd}>Datum Izmjene</th>
            <th className={styles.smalltd}>Hide</th>
            <th className={styles.smalltd}>Export</th>
            <th className={styles.smalltd}>Napomena</th>
          </tr>
          {Naslovi}
        </tbody>
      </table>
    </div>
  );
}
