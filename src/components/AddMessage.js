import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'antd'

const { TextArea } = Input
const MAX_LENGTH = 250

class AddMessage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      message: ''
    }
  }
  
  onInputValueChange = (e) => {
    this.setState({ message: e.target.value })
  }
  
  sendMessage = () => {
    this.props.dispatch(this.state.message, 'Me')
    this.setState({ message: '' })
  }
  
  render() {
    return (
      <div>
        <TextArea
          placeholder="Type here..."
          value={this.state.message}
          autosize={{minRows: 4}}
          onPressEnter={this.sendMessage}
          onChange={this.onInputValueChange}
          maxLength={MAX_LENGTH}
          style={{marginBottom: '20px'}}
        />
        {
          this.state.message
          ? <div style={{padding: '10px'}}>
              <b>{MAX_LENGTH - this.state.message.length}</b> characters left...
            </div>
          : null
        }
        <Button
          type="primary"
          disabled={!this.state.message && true}
          onClick={this.sendMessage}
          style={{width: '100%'}}
        >
          Send
        </Button>
      </div>
    )
  }
}

AddMessage.PropTypes = {
	dispatch: PropTypes.func.isRequired
}

export default AddMessage
