import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import Message from './Message'

const MessagesList = ({ messages }) => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={messages}
      renderItem={(message, i) => (
        <Message
          key={i}
          {...message}
        />
      )}
    />
  </div>
)

MessagesList.PropTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  message: PropTypes.string.isRequired,
		  author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default MessagesList