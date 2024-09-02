import styles from "./Cards.module.scss";

function Cards({ results }) {
  let display;
  console.log(results);
  if (results) {
    display = results.map((data) => {
      return (
        <div key={data.id} className="col-4 mb-4 position-relative">
          <div className={`${styles.card}`}>
            <img
              src={data.image}
              alt=""
              className={`${styles.img} img-fluid`}
            />
            <div style={{ padding: "10pdata" }} className="content">
              <div className="fs-4 fw-bold mb-4">{data.name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{data.location.name}</div>
            </div>
          </div>
          {(() => {
            if (data.status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {data.status}
                </div>
              );
            } else if (data.status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {data.status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {data.status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characterts Found :/";
  }

  return <>{display}</>;
}

export default Cards;
