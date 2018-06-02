import React, {Component} from 'react'
import messages from '../reducers/message';

class Message extends Component {
    
    render() {
        const {message} = this.props
        return(
            <div className="border border-primary" style={{ padding: 10,}}>
                <b>{message.username}</b>
                    <p> 
                    {message.message}
                    </p>
            </div>
        )
    }
}

export default Message;