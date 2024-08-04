
import {useState } from 'react';
import './App.css';
import Cell from './components/Cell';

function App() {

  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);  // for preventing the adding of 0 value when clicked on selected cell

  const config = [
    [1, 1, 1], 
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactiveCells = () => {
    console.log("deactivate")
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        console.log(newOrder)
        newOrder.pop();

        if(newOrder.length === 0){
          setIsDeactivating(false)
          clearInterval(timer)
        }

        return newOrder
      })
    }, 300);
  }

  const activateCells = (index) => {
    console.log("activate cells")
    const newOrder = [...order, index];
    setOrder(newOrder);

    console.log(newOrder)
    
    if(newOrder.length === config.flat(1).filter(Boolean).length){
      deactiveCells();
    }
  }

  return (
    <div className="grid_div">

      {config.flat(1).map((val, index) => {
       return val ? <Cell key={index} filled={order.includes(index)} isDisabled={order.includes(index) || isDeactivating} onClick = {() => activateCells(index)} /> : <span key={index}/>
      })}

    </div>
  );
}

export default App;
