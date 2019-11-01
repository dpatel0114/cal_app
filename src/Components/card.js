import React, { Component } from 'react';

class Card extends Component {
    state = { 


     }
    render() { 
        return ( 
            <div class="card col-sm-4 " style={{height: "50px", padding:"16px"}} > 
                   {this.props.element}
                    {/* <li class="list-group-item"> 1 </li>
                    <li class="list-group-item"> 2 </li>
                    <li class="list-group-item"> 3 </li> */}               
                
            </div>
         );
    }
}
 
export default Card;