import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchData, setFetchData] = useState([]);

  console.log(fetchData);

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async () => {
      let response = await fetch(api);
      let data = await response.json();
      setFetchData(data);
    })();
  }, [api]);

  return (
    // Create a card details component that displays the character's name, image, location, origin, gender, species, type, and status.
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{fetchData.name}</h1>

        <img className="img-fluid" src={fetchData.image} alt="" />
        {(() => {
          if (fetchData.status === "Dead") {
            return (
              <div className="badge bg-danger fs-5">{fetchData.status}</div>
            );
          } else if (fetchData.status === "Alive") {
            return (
              <div className=" badge bg-success fs-5">{fetchData.status}</div>
            );
          } else {
            return (
              <div className="badge bg-secondary fs-5">{fetchData.status}</div>
            );
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {fetchData.gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {fetchData.location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {fetchData.origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {fetchData.species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
