import styles from "./Cards.module.scss";

function Cards({ results }) {
  let display;
  console.log(results);
  if (results) {
    display = results.map((x) => {
      return (
        <div key={x.id} className="col-4 mb-4 position-relative">
          <div className={`${styles.card}`}>
            <img src={x.image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{x.name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{x.location.name}</div>
            </div>
          </div>
          {(() => {
            if (x.status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {x.status}
                </div>
              );
            } else if (x.status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {x.status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {x.status}
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
