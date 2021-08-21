import React from 'react'
import ReactDOM from 'react-dom'

class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'laowang',
            count: 0
        }
        // 将原型上的方法，通过bind给此方法添加this后，返回的新方法赋值给实例化对象上的fn，此时实例化对象上有了该方法。
        this.fn = this.fn.bind(this)
    }
    fn(){
        this.setState({
            count: this.state.count + 1

        })
    }
    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.count}</div>
                <button onClick={this.fn}>点击</button>
            </div>

        )
    }
}
ReactDOM.render(<Test />, document.getElementById('root'))