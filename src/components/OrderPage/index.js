import React, {useState} from 'react';
import './orderPage.css';
import { useHistory } from "react-router-dom";

function OrderPage() {
  const bunPrice = 10;
  const [name, setName] = useState('');
  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState(bunPrice);
  const [saladSelected, setSaladSelected] = useState(false);
  const [itemValues, setItemValues] = useState({Cheese: 0, Cutlets: 0});
  
  const items = [
    {
      name: 'Salad',
      price: 5,
      type: 'single'
    },
    {
      name: 'Cheese',
      price: 1,
      type: 'multiple'
    },
    {
      name: 'Cutlets',
      price: 2,
      type: 'multiple'
    },
  ];

  var itemChangeValue = function(item, event) {

    if(item.type == 'multiple') {
      let newItemValues = JSON.parse(JSON.stringify(itemValues));
      newItemValues[item.name] = parseInt(event.target.value);
      setItemValues(newItemValues);
      let newPrice = items.reduce((a,c) => {
        if(c.type == 'single') {
          a = saladSelected ?( a + c.price ): a;
        }
        else {
          if(newItemValues[c.name]) {
            a = a + (c.price * newItemValues[c.name]);
          }
        }
        return a;
      }, 10)
      setTotalPrice(newPrice);
    }
    if(item.name == 'Salad') {
      if(saladSelected) {
        setTotalPrice(totalPrice - item.price);
      }
      else {
        setTotalPrice(totalPrice + item.price);
      }
      setSaladSelected(!saladSelected);
    }
  }

  var submit = function() {
    var order = {
      name: name,
      Cheese: itemValues.Cheese,
      salad: saladSelected,
      Cutlets: itemValues.Cutlets,
      TotalPrice: totalPrice
    }

    if(!name) {
      alert("Please enter name");
      return 0;
    }

    var ordersArray = JSON.parse(localStorage.getItem('orders')) || []
    ordersArray.push(order)
    localStorage.setItem('orders', JSON.stringify(ordersArray))
    history.push("/table");
  }

  var getItems = function() {
    return items.map((item, index) => {
        return item.type == 'multiple'
          ? (
            <div className="margin-15" key={'item_'+index}>
              {item.name}: <input type="number" value={itemValues[item.name]} onChange={(event) => itemChangeValue(item,event)} />
            </div>
          )
          : (
            <div className="margin-15" key={'item_'+index}>
              {item.name}: <input type="checkbox" onChange={() => itemChangeValue(item)}/>
            </div>
          )
      })
  }

  return (
    <div className="order-page">
      <div className="heading">Place your Order</div>
      <div className="margin-15">
        Name: <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="margin-15">
        {getItems()}
      </div>
      <div className="margin-15">Total price: {totalPrice}</div>
      <div className="footer margin-15">
        <a className="button margin-15" onClick={submit}>Submit</a>
      </div>
    </div>
  );
}

export default OrderPage;