import React, { Component } from 'react';

class CommentList extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // "DataSource"：全局的数据源
            comments: DataSource.getComments()
        };
    }
    componentDidMount(){
        // 添加事件处理函数订阅数据
        DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount(){
        // 清除事件处理函数
        DataSource.removeChangeListener(this.handleChange);
    }
    handleChange(){
        // 任何时候数据发生改变就更新组件
        this.setState({
            comments: DataSource.getComments()
        });
    }

    render(){
        return(
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        )
    }
}
class BlogPost extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            BlogPost: DataSource.getBlogPost(props.id)
        };
    }
    componentDidMount(){
        DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange);
    }
    handleChange(){
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)
        });
    }
    render(){
        return <TextBlock text={this.state.blogPost} />;
    }
}
