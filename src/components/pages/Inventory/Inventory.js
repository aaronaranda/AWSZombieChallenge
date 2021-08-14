import React, { useState } from 'react';

const Inventory = () => {
  const [ITEMA, setA] = useState(null);
  const [ITEMB, setB] = useState(null);
  const [ITEMC, setC] = useState(null);
  const [ITEMD, setD] = useState(null);
  const [ITEME, setE] = useState(null);
  const [ITEMF, setF] = useState(null);
  const [ITEMG, setG] = useState(null);
  const [ITEMH, setH] = useState(null);
  const items = [ITEMA, ITEMB, ITEMC, ITEMD, ITEME, ITEMF, ITEMG, ITEMH];
  
  const sound = () => {
    const audio = document.getElementById('audio');
    audio.play();
  }


  const bodyParser = require("body-parser");
  const mysql = require('mysql');

  

      

  return (
    <div class="container">
      <h2>Add Inventory</h2> <br />
      <form>
          <h3>You Can Choose Only 8 Items To Bring With You To Survive the Apocalypse</h3> <br/>
          Item 1 <input type="text" name="ITEMA" placeholder="item 1..." onChange={event=>setA(event.target.value)} required /> <br/> 
          Item 2 <input type="text" name="ITEMB" placeholder="item 2..." onChange={event=>setB(event.target.value)} required /> <br/>
          Item 3 <input type="text" name="ITEMC" placeholder="item 3..." onChange={event=>setC(event.target.value)} required /> <br/>
          Item 4 <input type="text" name="ITEMD" placeholder="item 4..." onChange={event=>setD(event.target.value)} required /> <br/>
          Item 5 <input type="text" name="ITEME" placeholder="item 5..." onChange={event=>setE(event.target.value)} required /> <br/>
		      Item 6 <input type="text" name="ITEMF" placeholder="item 6..." onChange={event=>setF(event.target.value)} required /> <br/>
		      Item 7 <input type="text" name="ITEMG" placeholder="item 7..." onChange={event=>setG(event.target.value)} required /> <br/>
		      Item 8 <input type="text" name="ITEMH" placeholder="item 8..." onChange={event=>setH(event.target.value)} required /> <br/>
          <input type="submit" name = "submit" value="submit" /> 
      </form>
    </div>
  );
}

export default Inventory;
