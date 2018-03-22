import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'

const date = new Date()
const time = date.toLocaleTimeString()

const Message = ({message, author}) => (
  <List.Item>
    <List.Item.Meta
      title={`${author} at ${time}`}
      description={message}
    />
  </List.Item>
)

Message.PropTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
}

export default Message