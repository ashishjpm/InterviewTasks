import React, {useState, useEffect} from 'react';
import './orderTable.css';
import { useHistory } from "react-router-dom";

function OrderTable() {

  const [searchText, setSearchText] = useState('');
  const history = useHistory();

  let orders = JSON.parse(localStorage.getItem('orders'));
  console.log(orders)

  var getRows = function() {
    return orders.filter((item) => item.name.includes(searchText)).map((item, index) => {
      return (
        <tr className="row" key={'orderRow_'+index}>
          <td>{item.name}</td>
          <td>{item.Cheese}</td>
          <td>{item.Cutlets}</td>
          <td>{item.salad? 'yes': 'no'}</td>
          <td>{item.TotalPrice}</td>
        </tr>
      )
    })
  }

  var gotoOrdersPage = function() {
    history.push("/order");
  }

  return (
    <div className="order-table">
      <a className="button" onClick={gotoOrdersPage}>Goto Orders Page</a>
      <div className="search">
        Search: <input placeholder="Filter by name" type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
      </div>
      
      <table id="orders">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cheese</th>
            <th>Cutlets</th>
            <th>Salad</th>
            <th>TotalPrice</th>
          </tr></thead>
        <tbody>
          {getRows()}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable;