import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        //to get random image
        // imageUrl: 'https://picsum.photos/200',
    };

    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };

    render() { 
        return ( 
        <div>
            {/* <img src={this.state.imageUrl} alt="" /> */}
            <span style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
        </div>
        );
    }
    formatCount() {
        const {count} = this.state;
        // return this.state.count === 0 ? 'Zero' : this.state.count

        // We can rewrite this code by destruct

        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;