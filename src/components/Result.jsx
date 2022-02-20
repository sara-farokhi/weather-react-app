const Result = ({
  weather: {
    current: { condition, last_updated, temp_c },
    location: { localtime, country, name },
  },
}) => {
  return (
    <>
      <div className="result-wrapper">
        <p>Country : {country}</p>
        <p>City : {name}</p>
        <p>{temp_c}</p>
        <img src={condition.icon} alt="icon"></img>
        <p>{condition.text}</p>
        <p>LOCAL TIME : {localtime}</p>
        <p>LAST UPDATED : {last_updated}</p>
      </div>
    </>
  );
};

export default Result;
