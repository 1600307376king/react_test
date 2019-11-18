import React from 'react';


class Data extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : 'hello motherfucker!',
            sex : '1',
            citys : [
                'Beijing', 'Shanghai', 'Shenzhen'
            ],
            hobby : [
                {
                    'title' : 'sleep',
                    'checked' : true,
                },
                {
                    'title' : 'eat',
                    'checked' : false,
                },
                {
                    'title' : 'coding',
                    'checked' : true,
                }
            ],
            info: '',
        }
    }

    run() {
        alert('我是run方法')
    }

    handleUsername=(e)=> {
        this.setState({
            username : e.target.value
        })
    };

    handelSubmit=(e)=> {
        // 阻止submit 提交事件
        e.preventDefault();
        console.log(this.state.username, this.state.sex, this.state.city, this.state.hobby,
            this.state.info);
    };

    handelSex=(e)=> {
        this.setState({
            sex : e.target.value
        })
    };

    handelCity=(e)=> {
        this.setState({
            city: e.target.value
        })
    };

    handelHobby(key){
        let hobby = this.state.hobby;
        hobby[key].checked =! hobby[key].checked;

        this.setState({
            hobby: hobby
        })
    }

    handelInfo=(e)=> {
        this.setState({
            info: e.target.value
        })
    };

    render() {
        return (
            <div>
                <h1>666</h1>
                {/*<button onClick={this.run}>执行</button>*/}
                {/*<input type="text" value={this.state.username} onChange={this.handleUsername}/>*/}
                {/*{this.state.username}*/}
                {/*<input defaultValue={this.state.username}/>*/}
                <br/>
                <form onSubmit={this.handelSubmit}>

                    用户名: <input type="text" value={this.state.username} onChange={this.handleUsername}/>
                    <br/>
                    sex:
                    <input type="radio" value="1" checked={this.state.sex === "1"} onChange={this.handelSex}/>male
                    <input type="radio" value="2" checked={this.state.sex === "2"} onChange={this.handelSex}/>female
                    <br/>
                    city:
                    <select value={this.state.city} onChange={this.handelCity}>
                        {
                            this.state.citys.map(function (value, key) {
                                return <option key={key}>{value}</option>

                            })
                        }

                    </select>

                    <br/>
                    hobby:
                    {
                        this.state.hobby.map((value, key)=>{
                            return (
                                <span key={key}>

                                    <input type="checkbox" checked={value.checked}
                                           onChange={this.handelHobby.bind(this, key)}/>
                                    {value.title}
                                </span>
                            )
                        })
                    }
                    <br/>
                    remark
                    <textarea value={this.state.info} onChange={this.handelInfo}/>
                    <input type="submit" value="submit"/>

                </form>
            </div>
        )
    }
}

export default Data;