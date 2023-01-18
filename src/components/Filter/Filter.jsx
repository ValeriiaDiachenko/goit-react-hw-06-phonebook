import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/slices/filter';


export default function Filter() {
const dispatch = useDispatch();


  const changeFilter = e => {
    console.log(e.currentTarget.value);
    let value = e.currentTarget.value;
    dispatch(filterContacts(value));
  };

  return (
    <label>
      <input type="text" onChange={changeFilter} />
    </label>
  );
}

