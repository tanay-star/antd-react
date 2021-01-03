import React from 'react'
//importing ant components
import { Tabs } from 'antd'

const { TabPane } = Tabs

const MyTabs = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="All" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="In Progress" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Completed" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
}

export default MyTabs
