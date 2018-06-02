import React, {Component} from 'react'
import Message from './Message';
import {connect} from 'react-redux'

class MessageList extends Component {
    render() {
        const { messages } = this.props
        return(
            <div>
                {
                    messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))
                } 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const Telahconect = connect (mapStateToProps) (MessageList) 
export default Telahconect;