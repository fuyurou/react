//三个参数是一个方法
function createElement(tag,attrs,...children){
    attrs = attrs || {};//安全措施 是对象等一会儿for key in
    // console.log(tags,attrs,children);
    // key// 标注唯一性
    //虚拟节点
    // console.log(attrs.key)
    return{
        tag,
        attrs,
        children,
        key:attrs.key || null
    }
}
export default createElement;

