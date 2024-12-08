import React, {Component} from 'react';

class  LifeCycle extends Component  {

    constructor(props) {
        super(props);
        this.state = {counter : 0}
        console.log(`Constructor: Component is being Created`)
    
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(`getDerivedStateFromProps:`)
        return null
    }

    componentDidMount(){
        console.log('ComponentDidMount: Couponent has Mounted')
    }

    shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate: Should the component re-render?', nextState)
    return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate: Capture some info before DOM updates')
        return null;
    }

    componentDidUpdate(){
        console.log('ComponentDidUpdate: Couponent has Updated')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount: Couponent is to removed from DOM')
    }

    handleClick =() =>{
        this.setState((prevState)=>({counter: prevState.counter +1 }));
    }

render(){
    //console.log('Render: Component is rendering');
    return(
        <div>
            <h1> React Life Cycle</h1>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this.handleClick}>Increment Counter</button>
        </div>
    )

}


}

export default LifeCycle;