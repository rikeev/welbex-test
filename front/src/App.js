import './App.css';
import getData from './network';
import React, { useState, useEffect } from 'react';


function App() {
  let [field, setField] = useState('Название')
  let [rule, setRule] = useState('Равно')
  let [value, setValue] = useState('')

  let [tableData, setTableData] = useState({data: [], total: 1})

  useEffect (() => {
    getData(setTableData)
  }, [])

  const addFilter = () => {
    console.log('filter')
  }

  return (
    <div>
      <table border="1">
          <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
          </tr>
          {tableData.data.map((item) =>(<tr>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.distance}</td></tr>))}
      </table>
      {tableData.total}
      {}
      <select value={field} onChange={(evt) => setField(evt.target.value)}>
        <option>Название</option>
        <option>Количество</option>
        <option>Расстояние</option>
      </select>

      <select value={rule} onChange={(evt) => setRule(evt.target.value)}>
        <option>Равно</option>
        <option>Содержит</option>
        <option>Больше</option>
        <option>Меньше</option>
      </select>

      <input type='text' value={value} onChange={(evt) => setValue(evt.target.value)}></input>
      <button onClick={addFilter}>Фильтровать</button>

    </div>
  );
}

export default App;
