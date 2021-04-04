import React, { Component, useRef, useEffect } from "react";
import { render } from "react-dom";

class ReadyToScroll extends Component {
   constructor(props) {
     super(props);
     this.myRef = React.createRef();
   }
   render() {
     return <div ref={this.myRef}>Element to scroll to</div>;
   }
 
   executeScroll = () => this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
 export default ReadyToScroll;

