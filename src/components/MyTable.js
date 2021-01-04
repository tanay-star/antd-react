import React from 'react'
//importing ant components
import { Table } from 'antd'
import { Tag } from 'antd'

const columns = [
  {
    title: 'NAME',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'AGE',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'ADDRESS',
    dataIndex: 'address',
  },
  {
    title: 'JOB ID',
    dataIndex: 'jobid',
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    jobid: i,
    qty: i,
    status: <Tag color="#108ee9">Waiting</Tag>,
  })
}

const MyTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  )
}

export default MyTable
