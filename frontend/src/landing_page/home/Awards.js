import React from 'react';

function Awards() {
    return ( 
  <div className='container mt-5'>
    <div className='row'>
      <div className='col-6 p-5'>
        <img src='media/images/largestBroker.svg' alt='Largest Broker'/>
      </div>
      <div className='col-6 mt-5'>
        <h1>Largest stock broker in India</h1>
        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
        <ul>
            <li>
                <p>Futures and Options</p>
            </li>
            <li>
                <p>Commodity Derivatives</p>
            </li>
            <li>
                <p>Currency Derivatives</p>
            </li>
            <li>
                <p>Stocks & IPOs</p>
            </li>
            <li>
                <p>Direct mutual funds</p>
            </li>
        </ul>
        <img src='media/images/pressLogos.png'/>
      </div>
    </div>
  </div>


     );
}

export default Awards;
