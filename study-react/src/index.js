import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends Component{
    handleClickOnTitle (a) {
        a = !a
        console.log(a)
    }
    render(){
        const isTrue = false
        return(
            <div>
                <h1 onClick={this.handleClickOnTitle.bind(this,isTrue)}>{isTrue?"Hello":"React"}</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <Header />,
    document.getElementById('root')
)
