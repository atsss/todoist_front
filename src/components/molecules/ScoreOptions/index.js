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

const options = [
  { value: 0, name: 0 },
  { value: 3, name: 3 },
  { value: 6, name: 6 },
  { value: 8, name: 8 },
  { value: 10, name: 10 }
];

export default ScoreOptions;
