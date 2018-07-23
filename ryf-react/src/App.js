import React, { Component } from 'react';
// 对react ui 阿里的antd 部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form,message } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import axios from 'axios'
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;


class App extends Component {
    columns=[{
        dataIndex:"username",
        title:"用户"
    },{
        dataIndex:"age",
        title:"年龄"
    },{
        dataIndex:"address",
        title:"地址"
    },{
        dataIndex:"action",
        title:"操作",
        width:200,
        render:(text,row)=>{
            return (
                <div>
                    <Button type="primary" onClick={()=>{this.modal('edit',row)}}>编辑</Button>
                    <Button type="danger" style={{marginLeft:10}} onClick={()=>this.remove(row)}>删除</Button>
                </div>
            )
        }
    }]
    state = {
        visible: false,
        users:[{
            username:'zk',
            age:18,
            address:'杭州',
            id:1
        }]
    }
    remove(row){
        //onOk里面是普通函数this会改变所以定义一下
        const that = this;
        // confirm() 是或否
        confirm({
            title:'是否要删该除用户？',
            okText:"是",
            cancelText:'否',
            onOk(){
                const _users = that.state.users.filter(data=>{
                    return data.id != row.id
                });
                that.setState({
                    users:_users
                })
            }
        })
    }
    searchUser(event){
        axios.get('http://localhost:3006') //前端向后端3006接口发送请求
            .then(data=>{
                console.log(data)
            })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        return (
           <div className="App">
               <Row>
                   <Search style={{width: 300}} onChange={this.searchUser.bind(this)}/>
                   <Button type="primary" style={{marginLeft: 20}} onClick={() => this.modal('add')}>添加用户</Button>
               </Row>
               <Row style={{paddingTop:20}}>
                   <Table dataSource={this.state.users} columns={this.columns} rowKey={row=>row.id} bordered pagination={false}/>
               </Row>
               <Modal title="添加用户" 
               visible={this.state.visible} 
               onOk={() => this.handleOk()}
               onCancel={() => this.setState({ visible: false})}>
                   <Form>
                       <FormItem label="用户" {...formItemLayout}>
                       {
                           getFieldDecorator('username',{rules:[{required:true,message:'Please input your username'}]}) //得到字段 ,id是username
                           (<Input placeholder="UserName" />)
                       }
                       </FormItem>
                       <FormItem label="年龄" {...formItemLayout}>
                       {
                           getFieldDecorator('age',{rules:[{required: true,message:'Please Input'}]})
                           (<Input placeholder="age"/>
                           )
                       }
                       </FormItem>
                       <FormItem label="地址"{...formItemLayout}>
                       {
                           getFieldDecorator('address',{rules:[{required: true,message:'Please input your address!'}]})
                           (<Input placeholder="address"/>
                           )
                       }
                       </FormItem>
                   </Form>
               </Modal>
           </div>
        );
    }

    handleOk() {
        // console.log('ok')
        // this.setState({
        //     visible: false
        // })
        // 这里先注释 先去做表单的验证
        // values 表单要提交到数据库里面的值  validateFielsdsAndScroll 验证的api
        //验证表单不出错收集的所有数据values
        this.props.form.validateFieldsAndScroll((err,values)=>{
            // console.log(err)
            if(!err){
                // this.setState({
                //     visible:false
                // })
                //增加一条数据
                //post方法向后端发送请求 保存数据
                let data = {
                    username:values.username,
                    age:values.age,
                    address:values.address
                }
                console.log(data);
                axios.post('http://127.0.0.1:3006/user',data)
                    .then(msg=>{
                        console.log(msg);
                        this.setState({
                            visible:false
                    });
                    message.success('添加成功')  
                })
            }
        })
    }

    modal (type,row) {
        // console.log(type)
        //this.setState异步 设置完数据会callback 
        //接受一个函数 得到新的setState  
        this.setState({
            visible: true
        },()=>{
            this.props.form.resetFields();
            if(type == 'add') return;
            this.props.form.setFieldsValue({
                username:row.username,
                age:row.age,
                address:row.address
            })
        })
    }
}

export default Form.create()(App);
