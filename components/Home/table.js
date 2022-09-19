import { titleEnd, media, quantity } from "./utils";
import styles from "../../styles/home.module.css";

export default function TableResponse({ params }) {
  const existingTitles = params.filter((param) => param.results.length > 0);
  console.log(existingTitles);
  const Naslovi = existingTitles.map((title) => {
    return (
      <tr key={title.results[0].barcode[0]}>
        <td>{`${title.results[0].barcode[0].replace(/\D/g, "")}`}</td>
        <td>{`${title.results[0].title.split(" - ").shift().toUpperCase()} ${title.results[0].title
          .split(" - ")
          .pop()}  ${titleEnd(title)}`}</td>
        <td>{title.results[0].title.split(" - ").shift().toUpperCase()}</td>
        <td>{title.results[0].title.split(" - ").pop()}</td>
        <td>{media(title)}</td>
        <td>{quantity(title)}</td>
        <td>{title.results[0].catno}</td>
        <td>{title.results[0].label[0]}</td>
        <td>{title.results[0].country}</td>
        <td>{title.results[0].genre[0]}</td>
      </tr>
    );
  });
  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr>
            <th>Barcode</th>
            <th>Naziv</th>
            <th>Naziv 2</th>
            <th>Naziv 3</th>
            <th>Medij</th>
            <th>Količina</th>
            <th>Kataloški</th>
            <th>Label</th>
            <th>Država</th>
            <th>Žanr</th>
          </tr>
          {Naslovi}
        </tbody>
      </table>
    </div>
  );
}
