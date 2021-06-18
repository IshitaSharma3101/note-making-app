import { useState } from "react";

const Filters = ({ handleSearchMonth, handleSearchYear }) => {
  const [year, setYear] = useState(
    Array.apply(null, { length: 50 }).map(function (el, index) {
      return index + 2000;
    }),
  );

  return (
    <div className='filters'>
      <select
        id='month'
        name='month'
        className='button'
        onChange={(e) => handleSearchMonth(e.target.value)}>
        <option value='select'>Select Month</option>
        <option className='option' value='01'>
          January
        </option>
        <option value='02'>February</option>
        <option value='03'>March</option>
        <option value='04'>April</option>
        <option value='05'>May</option>
        <option value='06'>June</option>
        <option value='07'>July</option>
        <option value='08'>August</option>
        <option value='09'>September</option>
        <option value='10'>October</option>
        <option value='11'>November</option>
        <option value='12'>December</option>
      </select>
      <select
        id='year'
        name='year'
        className='button'
        onChange={(e) => handleSearchYear(e.target.value)}>
        <option value='select'>Select Year</option>
        {year.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
