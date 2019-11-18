import React from 'react';

class News extends React.Component{
    constructor(props) {
        super(props); // 用于父子组建传值
        this.state = {
            userInfo: 'yes',
            username: 'you',
        };

        // 获取数据方法二
        this.getData = this.getData.bind(this);
    }

    run(){
        alert('我是ff')
    }

    getData() {
        alert(this.state.userInfo)
    }

    getData2= () => {
        alert(this.state.userInfo)
    };

    setData= () => {
        this.setState({
            userInfo: '2333'
        })
    };

    setName = (str) => {
        this.setState({
            userInfo:str,
        })
    };

    render() {
        return(
            <div>
                <ul>
                    <li>列表1 {this.state.userInfo}</li>
                    <li>{this.state.username}</li>
                    <button onClick={this.run}>执行</button>
                    <br />
                    <button onClick={this.getData.bind(this)}>获取数据方法一</button>
                    <br />
                    <button onClick={this.getData}>获取数据方法二</button>
                    <br />
                    <button onClick={this.getData2}>获取数据方法三</button>
                    <br/>
                    <button onClick={this.setData}>修改userInfo</button>
                    <br/>
                    <button onClick={this.setName.bind(this, '张三')}>传值</button>
                </ul>
            </div>
        )
    }
}

export default News;