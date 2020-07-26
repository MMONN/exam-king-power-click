import React, { useState, useContext } from 'react';
import '../css/TableDatacss.css';
import 'antd/dist/antd.css';
import { Table, Button, Space, Modal } from 'antd';
import { UserContext } from '../store/UserProvider';
import ModalForm from '..//component/ModalForm'

function TableData() {

      const {users, setUsers, handleEdit } = useContext(UserContext);
      const [seleted, setSeleted] = useState([]);
      const [selectionType, setSelectionType] = useState('checkbox');
      const [visible, setVisible] = useState(false)

      const showModal = () => {
            setVisible(true)
      };
      const handleCancel = e => {
            setVisible(false)
      };
      const columns = [
            {
                  title: 'NAME',
                  dataIndex: 'firstName',
            },
            {
                  title: 'GENDER',
                  dataIndex: 'gender',
            },
            {
                  title: 'MOBILE PHONE',
                  dataIndex: 'mobilePhone',
            },
            {
                  title: 'NATIONALITY',
                  dataIndex: 'nationality',
            },
            {
                  title: '',
                  key: 'action',
                  render: (text, record,index) => (

                        <Space size="middle">
                              <Button type="primary" ghost onClick={() => { handleEdit(index); showModal() }}>EDIT</Button>/
                              <Button type="primary" danger onClick={() => handleDelete(record.key)}>DELETE</Button>
                        </Space>
                  ),
            },

      ];

      const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
      };

      const handleDelete = (key) => {
            const newUsers = users.filter(item =>
                  item.key !== key);
            setUsers(newUsers)
            localStorage.setItem("users", JSON.stringify(newUsers))
      }

      const deleteAll = () => {
            localStorage.clear()
            setUsers(localStorage.getItem("users"))
      }
      const handleSelection = (e) => {
            setSeleted(e)
      }


      return (
            <div>
                  <Button onClick={deleteAll} danger>Delete All</Button>
                  <Table
                        rowSelection={{
                              type: selectionType,
                              onChange: handleSelection
                        }}
                        columns={columns}
                        dataSource={users}
                  />
                  <Modal
                        title="User Form"
                        visible={visible}
                        onCancel={() => handleCancel()}
                        footer = {null}
                  >
                        <ModalForm />
                  </Modal>
            </div >
      )
}
export default TableData;