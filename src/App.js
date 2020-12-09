import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Markup } from 'interweave';
import  './App.css'

const list = [{
  "widget_type": "FEATURE_ROW",
  "data": {
    "title": "بررسی فنی بیش از <b>۴۰۰</b> نقطه‌ خودرو",
    "image_url": "https://s100.divarcdn.com/static/icons/4/ic_checked.png",
    "image_color": "SUCCESS_PRIMARY",
    "has_divider": true,
    "icon": {
      "image_url_dark": "https://s100.divarcdn.com/static/imgs/widget-icons/dark/success_primary/checked.png",
      "image_url_light": "https://s100.divarcdn.com/static/imgs/widget-icons/light/success_primary/checked.png",
      "icon_name": "CHECKED",
      "icon_color": "SUCCESS_PRIMARY"
    }
  }
}]
  


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list :list ,
      term:'' ,
    };
  }

  render() {
  
    const{term,list}=this.state;
    
    return (
      <div className="App">
      
        {
list.map( i => 
   
   <div className="txt1">
  <Markup content={i.data.title} />
  <img className="circle" src={i.data.icon.image_url_dark} />
  
  </div>

 )  
 
}

      </div>
    );

  }
}


export default App;