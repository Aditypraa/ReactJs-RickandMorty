function InputGroup({ total, name, setId }) {
  console.log([...Array(total).keys()]);
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setId(e.target.value)}
        className="form-select"
        id={name}
      >
        {[...Array(total).keys()].map((item, index) => {
          return (
            <option key={index} value={item + 1}>
              {name} - {item + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InputGroup;
