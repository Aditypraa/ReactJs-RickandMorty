import FiltersButton from "../FiltersButton";

function Gender({ setGender, setPageNumber }) {
  let genders = ["male", "female", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => (
            <FiltersButton
              task={setGender}
              setPageNumber={setPageNumber}
              key={index}
              name="genders"
              items={items}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gender;
