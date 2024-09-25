import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

function Location() {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let [total, setTotal] = useState(0); // Tambahkan state untuk total location
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    // Fetch data untuk location berdasarkan id
    (async () => {
      let response = await fetch(api);
      let data = await response.json();
      setInfo(data);

      let char = await Promise.all(
        data.residents.map((character) =>
          fetch(character).then((res) => res.json())
        )
      );
      setResults(char);
    })();
  }, [api]);

  // Fetch jumlah total location
  useEffect(() => {
    (async () => {
      let response = await fetch(`https://rickandmortyapi.com/api/location`);
      let data = await response.json();
      setTotal(data.info.count); // Simpan jumlah total location dari info.count
    })();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h5 className="text-center">Type : {type === "" ? "Unknown" : type}</h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup setId={setId} name={"Location"} total={total} />{" "}
          {/* Gunakan total location yang dinamis */}
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
