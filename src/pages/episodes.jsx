import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

function Episodes() {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let [total, setTotal] = useState(0); // Tambahkan state untuk total episode
  let { name, air_date } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    // Fetch data untuk episode berdasarkan id
    (async () => {
      let response = await fetch(api);
      let data = await response.json();
      setInfo(data);

      let char = await Promise.all(
        data.characters.map((character) =>
          fetch(character).then((res) => res.json())
        )
      );
      setResults(char);
    })();
  }, [api]);

  // Fetch jumlah total episode
  useEffect(() => {
    (async () => {
      let response = await fetch(`https://rickandmortyapi.com/api/episode`);
      let data = await response.json();
      setTotal(data.info.count); // Simpan jumlah total episode dari info.count
    })();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">
          Episodes :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date : {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup setId={setId} name={"Episode"} total={total} />{" "}
          {/* Gunakan total episode yang dinamis */}
        </div>
        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episodes;
