import React from 'react'

class HelloClass extends React.Component {
    // phase 1 ==> constructor
    constructor(props) {
        super(props)
        this.state = {
            name: 'Amar',
            counter: 0,
            increment: () => {}
        }
        console.log("constructor")

    }

    // phase 2 ===> componentDidMount
    componentDidMount() {
        console.log("componentDidMount")
        // call api
        // create logic
        // do anything
        // this.setState((prevState) => {
        //     return {...prevState, name: 'Singh'}
        // })
    }

    // phase 3 ==> componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
       // this.setState({...this.state, name: "Singh"})
       
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.counter >= 2) {
            console.log("shouldComponentUpdate false")
            return false
        }
        console.log("shouldComponentUpdate true")
        return true

    }

   // phase 4 ==> componentWillUnmount
    componentWillUnmount() {
        console.log("componentWillUnmount")
        return () =>  {
            //
        }
    }

    increment = () => {
        console.log("increment", this.state)
       this.setState({...this.state, counter: this.state.counter + 1})
    }
    render() {
        return (
            <div>
                {console.log("rendering")}
                Hello Class
                <p>Name: {this.state.name}</p>
                <p>Counter: {this.state.counter}</p>
                <button type="button" onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default HelloClass