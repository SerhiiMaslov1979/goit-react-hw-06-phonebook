// export function Filter({ onChange, value }) {
//   return <input type="text" onChange={onChange} value={value} />;
// }
// Filter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return <input type="text" onChange={handleFilterChange} value={filter} />;
}
