import React,{Component} from 'react';
import './App';
import {Table,Pagination,Input,Row,Button,Modal,Form}from 'antd';
import 'antd/dist/antd.css';
const {Search} =Input;
const FormItem =Form.Item;
const {confirm} = Modal;

class App extends Component{
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
                    <Button type="primary" onClick={()=>{this,modal('edit',row)}}>编辑</Button>
                    <Button type="danger" style={{marginLeft:10}} onClick={()=>this.remove(row)}>删除</Button>
                </div>
            )
        }
    }]
    state={
        // visible:true,
        users:[{
            username:'dodo',
            age:18,
            address:'北京',
            id:1
        }]
    }
    remove(row){
        const that = this;
        confirm({
            title:"是否要删除",
            okText:'是',
            cancleText:'否',
            onOk(){
                const _users = that.state.users.filter(data=>{
                    return data.id !=row.id
                });
                that.setState({
                    users:_users
                })
            }
        })
    }
    render(){
        const {getFieldDecorator}=this.props.form;
        const formItemLayout={
            labelCol:{
                xs:{span:24},
                sm:{span:4}
            },
            wrapperCol:{
                xs:{span:24},
                sm:{span:16}
            }
        }
        return(
            <div className="App">
                <Row > 
                    <Search style={{width: 300}} />
                    <Button type="primary" style={{marginLeft: 20}} onClick={() => this.modal('add')}>添加用户</Button>
                </Row>
                <Row style={{paddingTop:20}}>
                   <Table dataSource={this.state.users} columns={this.columns} rowKey={row=>row.id} bordered pagination={false}/>
               </Row>
                <Modal title="添加用户" visible={this.state.visible} onOk={()=>this.handleOk()} onCancel={()=>this.setState({visible:false})}> 
                        <Form>
                            <FormItem label="用户" {...formItemLayout}>
                                {
                                    getFieldDecorator('username',{rules:[{required:true,message:'Please input your username'}]})
                                    (<Input placeholder="Username"/>)
                                }
                                
                            </FormItem>
                        </Form>
                    </Modal>

            </div>
        );
    }
    handleOk(){
        this.props.form.validateFieldAndScroll((err,value)=>{
            if(!err){
                this.setState({
                    visible:false
                })
            }
        })
    }
    modal(type,row){
        this.setState({
            visible:true
        },()=>{
            this.props
        })
    }
}

export default Form.create()(App);