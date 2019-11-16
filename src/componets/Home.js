import React from 'react';
import '../assets/css/Home.css'
import logo from '../assets/images/logo192.png'

class Home extends React.Component{
    constructor(props){
        super(props);
        // 定义数据
        this.state = {
            name: "张三",
            cl : 'ok',
            al: '图片加载错误',
            list: ['111', '222'],
            list2: [<h2 key={'1'}>ok</h2>, <h3 key={'2'}>ok?</h3>]
        }
    }

    render(){
        let listR = this.state.list.map(function(value, key) {
            return (<li key={key}>{value}</li>);
        }) ;
        return (
            <div>hello {this.state.name}
                <div className={this.state.cl}>外联红色</div>
                <div style={{"color": "green"}}>内敛绿色</div>
                <img src={logo} alt={this.state.al}/>
                <img src={require('../assets/images/logo192.png')} alt={this.state.al}/>
                {listR}
                {this.state.list2}
            </div>

        )
    }
}

export default Home;