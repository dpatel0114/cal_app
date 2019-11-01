import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Card from './card'


class KeyPad extends Component {
    state = { 
        num: ['(','CE',')','C',1,2,3,'+',4,5,6,'-',7,8,9,'*','.','0','/','=']
     }

    render() { 
        return ( 
            <div>
            <div class="form form-group" style={{margin:"15% 30% 0% 30%"}}><input style={{width:'75%', height:'70px'}}/> </div>
             <div class="row text-center" style={{margin:"0% 35% 35%"}} >
                {this.state.num.map(n => <Card element={n}/>)}
            </div>
            </div>
        );
    }
}

export default KeyPad;