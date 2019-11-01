import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './card'


class Count extends Component {
    state = { 
        num: [0,1,2,3,4,5,6,7,8,9]
     }

    render() { 
        return ( 
            <div>
             <div class="row text-center" style={{margin:"20% 30% 30%"}} >
                {this.state.num.map(n => <Card element={n}/>)}
            </div>
            </div>
        );
    }
}
 
export default Count;