import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'antd'
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
//default theme
import './styles/antd.less'
import './styles/main.less'

const { Sider, Content } = Layout

class App extends Component {
  render() {
    return (
      <div className="container">
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
              <MessagesList />
              <AddMessage />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App
