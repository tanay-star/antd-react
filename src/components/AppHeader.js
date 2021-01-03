import React from 'react'
import { Menu } from 'antd'
//..........................
import { Typography } from 'antd'

const { Title } = Typography

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header" style={{ padding: '10px' }}>
        <Title level={2}>My Depot</Title>
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ backgroundColor: '#dddddd' }}
        ></Menu>
      </div>
    </div>
  )
}

export default AppHeader
