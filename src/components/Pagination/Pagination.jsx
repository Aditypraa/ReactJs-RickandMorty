function Pagination({ pageNumber, setPageNumber }) {
  let next = () => {
    setPageNumber((next) => next + 1);
  };

  let prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((prev) => prev - 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

export default Pagination;
