import deals from './deals.jpg';
import footer from './footer.png';
import header from './header.png';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
 <Navbar/>
<div styleName="photoDiv">
     <img src={deals} alt="Deals" className="photo"/>
</div>
   
<div styleName="textDiv">
   <p><h1> Big deals are coming to your phone soon!</h1></p>
     <h4>You're all set to receive exclusive deals from Priceline via SMS</h4>
      <button className="button">See Our Latest Deals</button>
   </div>

   <BottomPane/>     
    </div>
  );
}


class Navbar extends React.Component{
  render() {
      return (
        <div>
        <img src={header} alt="Footer" className="photoHeader"/>
  </div>
      );
  }
}

class BottomPane extends React.Component{
  render() {
      return (
          <div className="bottomPane">
                <img src={footer} alt="Footer" className="photoFooter"/>
          </div>
      );
  }
}

export default App;
