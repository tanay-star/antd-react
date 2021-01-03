import React from 'react'
import './MainLayout.css'
import MyTable from '../MyTable'
import MyTabs from '../MyTabs'

//importing from ant design
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  AppstoreAddOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

import { Typography } from 'antd'
import { Avatar } from 'antd'
import { BellFilled } from '@ant-design/icons'
import { Row, Col } from 'antd'
import { Badge } from 'antd'

const { Title } = Typography

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const MainLayout = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#dddddd', padding: '5px' }}>
        <Row>
          <Col
            sm={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Title level={2}>My Depot</Title>
          </Col>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
          <Col
            sm={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {' '}
            <Badge count={6}>
              <BellFilled style={{ fontSize: '20px' }} />
            </Badge>
            <Avatar
              icon={<UserOutlined />}
              style={{
                backgroundColor: '#30475e',

                marginLeft: '30px',
              }}
            />
          </Col>
        </Row>

        <div className="logo" />

        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ backgroundColor: '#dddddd' }}
        ></Menu>
      </Header>
      <Layout>
        <Sider trigger={null}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<AppstoreAddOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Jobs
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Storage
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Title level={2} style={{ fontWeight: 'bold' }}>
              My Jobs
            </Title>
            <MyTabs />
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 580,
            }}
          >
            <MyTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout
