import React from 'react';


class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            addList: [
                {
                    title : '录制ionic',
                    checked : true,
                },
                {
                    title: '录制node',
                    checked: false,
                }
            ],
        }
    }

    // addData=()=> {
    //     let tmpList = this.state.addList;
    //     tmpList.push(this.refs.title.value);
    //     this.refs.title.value = '';
    //     this.setState({
    //         addList: tmpList
    //     })
    // };
    //
    // rmData=(key)=> {
    //     let tmpList = this.state.addList;
    //     tmpList.splice(key, 1);
    //     this.setState({
    //         addList: tmpList
    //     })
    // };

    addData=(e)=> {
        if(e.keyCode===13){
           let title = this.refs.title.value;
           let tmpList = this.state.addList;

           tmpList.push({
               title : title,
               checked : false,
           });
            this.refs.title.value = '';
            this.setState({
                addList : tmpList
            })
        }
    };

    checkedBoxChange=(key, value)=> {
        let tmpList = this.state.addList;
        tmpList[key].checked =! tmpList[key].checked;
        this.setState({
            addList: tmpList
        })
    };

    rmData=(key)=>{
        let tmpList = this.state.addList;
        tmpList.splice(key, 1);
        this.setState({
            addList: tmpList
        })
    };

    render() {
        return (
            <div>
                {/*<h2>React TodoList demo</h2>*/}
                {/*<input ref="title"/> <button onClick={this.addData}>add</button>*/}
                {/*<hr/>*/}
                {/*<ul>*/}
                {/*    {*/}
                {/*        this.state.addList.map((value, key)=>{*/}
                {/*            return (*/}
                {/*                <li key={key}>{ value }*/}
                {/*                    <button onClick={this.rmData.bind(this, key)}>delete - </button>*/}
                {/*                </li>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</ul>*/}
                <input ref="title" onKeyUp={this.addData}/>
                <h2>代办事项</h2>
                <ul>
                    {
                        this.state.addList.map((value, key)=>{
                            if(!value.checked)
                            {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked}
                                        onChange={this.checkedBoxChange.bind(this, key, value)}/>
                                        {value.title}
                                        <button onClick={this.rmData.bind(this, key)}>delete - </button>
                                    </li>
                                )
                            }
                            else {
                                return ''
                            }
                        })
                    }
                </ul>
                <hr/>
                <h2>已完成事项</h2>
                <ul>
                {
                    this.state.addList.map((value, key)=>{
                        if(value.checked){

                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked}
                                    onChange={this.checkedBoxChange.bind(this, key, value)}/>
                                    {value.title}
                                    <button onClick={this.rmData.bind(this, key)}>delete - </button>
                                </li>
                            )
                        }
                        else {
                            return ''
                        }
                    })
                }
                </ul>
            </div>
        )
    }
}

export default TodoList;