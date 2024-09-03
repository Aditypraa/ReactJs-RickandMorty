function FiltersButton({ task, setPageNumber, name, index, items }) {
  return (
    <div>
      <style>
        {`
          .select:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            task(items);
            setPageNumber(1);
          }}
          className="form-check-input select"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        ></input>
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
}

export default FiltersButton;
