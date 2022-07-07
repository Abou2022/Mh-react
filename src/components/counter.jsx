import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:2
    };

    render() { 
        return ( 
        <div>
            <span>{this.formatCount}</span>
            <button>Increment</button>
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