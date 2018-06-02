import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addMessage} from '../actions/message'

class FormName extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            message:''
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        const target = e.target

        this.setState ({
            [target.name]: target.value
        })
    }
    
    render() {
        const {username, message} = this.state    
        const {addMessage}  = this.props
        return(
            <div >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <br/>
                    <input type="email" className="form-control" 
                    id="exampleInputEmail1"
                    name="username"  
                    placeholder="Enter Email / Username"
                    value={username}
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Status</label>
                    <textarea className="form-control"
                    name="message"
                    value={message}
                    onChange={this.handleChange}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => addMessage(this.state)}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        addMessage: message => {
            dispatch(addMessage(message))
        }
    }
 }


export default connect(mapStateToProps, mapDispatchToProps)(FormName)