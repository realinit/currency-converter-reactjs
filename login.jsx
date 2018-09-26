import React from 'react';

import { connect }          from 'react-redux';
import { addTodo,deleteTodo }          from './actions/action';



class login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.state = {username: '',msg:false,email:""};
        this.email = null;
      }

    handleSubmit  = (event) => {
        alert('A name was submitted: ' + this.state.username + 'with emailId: '+this.email.value );
        event.preventDefault();
        const userData = {"username":this.state.username,"email":this.email.value};
        //let prevState = (this.state.todos);
        this.props.saveData(userData);
        this.setState({msg:true});
        this.setState({username: "","email":""});

    }
    handleChange(event) {
        this.setState({username: event.target.value});
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handleDeleteElement(key) {
      console.log(key);
        this.props.deleteData(key);
    }
    rendersavedElements () {
        console.log(this.props.todos,">>>>>>>>>>>> ",(this.props.todos).length);
    if((this.props.todos).length ==0){
        return null
    }

    return (
            this.props.todos.map((todo)=> {
                return (
                    <div key={todo.text.username}>
                      <span style={{display:"block",color:"green",border:"1px solid #000"}}>
                          {todo.text.username} : {todo.text.email}</span>
                        <button type="button" onClick={this.handleDeleteElement.bind(this,{todo})}>Delete</button>
                    </div>
                      )
            })
    )
    }


    render () {
        return (
            <div>
                <div>
                    {this.rendersavedElements()}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                      Email:
                      <input
                            type="email"
                            ref ={(ref)=>{this.email = ref;}}
                            value={this.state.email}
                            onChange={this.handleEmailChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
      )
    }

}

const mapStateToProps = state => {
    const {todos} = state;
    console.log("state ",state);

    return {
        todos
    }

};


const mapDispatchToProps = dispatch => ({

    saveData(data) {
        dispatch(addTodo(data));
    },
    deleteData(data) {
        dispatch(deleteTodo(data));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(login);
