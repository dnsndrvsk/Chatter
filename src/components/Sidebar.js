import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'

const Sidebar = ({ users }) => (
  <Menu 
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', background: '#f9dfd6' }} 
  >
    {users.map(user => (
      <Menu.Item key={user.id} style={{margin: 0}}>
        <Icon type="user" />
        <span>{user.name}</span>
      </Menu.Item>
    ))}
  </Menu>
)

Sidebar.PropTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default Sidebar