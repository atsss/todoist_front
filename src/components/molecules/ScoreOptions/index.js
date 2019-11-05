import React from "react";
import Select from "../../molecules/inputs/Select";

const ScoreOptions = ({ value, setScore, className }) => {
  const onChange = score => setScore(parseInt(score, 10));

  return (
    <Select
      value={value}
      options={options}
      onChange={onChange}
      className={className}
    />
  );
};

const options = [0, 3, 6, 8, 10].map(i => {
  return { value: i, name: i };
});

export default ScoreOptions;
