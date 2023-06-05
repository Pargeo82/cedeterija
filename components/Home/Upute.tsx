export default function Upute() {
  return (
    <div>
      <h2>Upute:</h2>
      <ol>
        <li>Ubaci barcodove iz excelice ili direktno iz wand log-a</li>
        <li>Kopiraj cijelu dobivenu tablicu u excel (mora sadržavati prva 2 reda naslova)</li>
        <li>
          Pročitaj grupu u wandu i upiši recimo: &apos;0262 (mora početi sa apostrofom jer inače
          makne nulu)
        </li>
        <li>Formatiraj barcode u Custom =&gt; 0</li>
        <li>Spremi datoteku točno kao: artikli i usluge.csv (csv - comma delimited)</li>
        <li>Kopiraj datoteku u wand u folder Import na desktopu</li>
        <li>Uđi u maloprodaju =&gt; Registri =&gt; Planska kalkulacija cijena za robe</li>
        <li>Export/Import =&gt; Interni export/import =&gt; Import svih podataka o artiklima</li>
        <li>
          Podesi =&gt; provjeri je li izabran dobar folder, označi ako nije &quot;Ne ažuriraj&quot;
          i &quot;Ukoliko traženi artikal ne postoji kreiraj ga&quot;
        </li>
        <li>&quot;Ažuriraj postojeće registre&quot; NE SMIJE biti uključeno</li>
        <li>Klikni &quot;Konvert&quot;</li>
        <li>
          &quot;Prikaži LOG datoteku&quot; (piše što nije dobro ako nije, i/ili piše da je x/x
          uspjelo)
        </li>
      </ol>

      <p>
        *Realno točke 9 i 10 su uvijek postavljene kako treba, osim ako netko nije kopao nešto po
        njima
      </p>
    </div>
  );
}
