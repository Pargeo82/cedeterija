export default function TableResponse({ params }) {
  console.log(params);
  const existingTitles = params.filter((param) => param.results.length > 0);
  console.log(existingTitles);
  const Naslovi = existingTitles.map((title) => {
    return (
      <tr key={title.results[0].barcode[0]}>
        <td>{title.results[0].barcode[0].replace(/\D/g, "")}</td>
        <td>{`${title.results[0].title.split(" - ").shift().toUpperCase()} ${title.results[0].title
          .split(" - ")
          .pop()}`}</td>
        <td>{title.results[0].title.split(" - ").shift().toUpperCase()}</td>
        <td>{title.results[0].title.split(" - ").pop()}</td>
      </tr>
    );
  });
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Barcode</th>
            <th>Naziv</th>
            <th>Naziv 2</th>
            <th>Naziv 3</th>
          </tr>
          {Naslovi}
        </tbody>
      </table>
    </>
  );
}
