import React, { useState ,useContext} from 'react';
import { DatePicker, Form, Input, Button, Row, Col, Select, Radio} from 'antd';
import { UserContext } from '../store/UserProvider';
import '../css/TableDatacss.css';
function ModalForm() {
      
      const [birthday, setBirthday] = useState();
      const {  setUsers, dataForEdit } = useContext(UserContext);
      const handleChangeDate = (date, dateString) => {
            setBirthday(dateString)
      }
      const dateFormat = 'MM/DD/YYYY';
      const { Option } = Select;
      const handleSubmit = (e) => {
            console.log(e)
            let user = {
                  "title": e.title,
                  "firstName": e.firstName,
                  "lastName": e.lastName,
                  "birthday": birthday,
                  "nationality": e.nationality,
                  "citizen": e.citizen,
                  "gender": e.gender,
                  "mobile": e.mobile,
                  "passport": e.passport,
                  "expectedSalary": e.salary,
                  "key": new Date ()
            }
            setUsers(prevState => {
                  let newUsers = [...prevState]
                  newUsers.push(user)
                  return newUsers
            })
      }

      return (
            <div>
                  <Form name="UserForm" onFinish={handleSubmit} initialValues={dataForEdit}  >
                  { console.log(dataForEdit)}
                        <Row>
                              <Col span={3}>
                                    <Form.Item label="Title" 
                                          rules={[{ required: true, message: 'Please Select your title!' }]}
                                          name="title"
                                    >
                                          <Select>
                                                <Option value="Mr">Mr.</Option>
                                                <Option value="Miss">Miss.</Option>
                                                <Option value="Mrs">Mrs.</Option>
                                          </Select>
                                    </Form.Item>
                              </Col>
                              <Col span={10} style={{ marginLeft: '2%' }}>
                                    <Form.Item
                                          label="First name :"
                                          rules={[{ required: true, message: 'Please input your First name!' }]}
                                          name="firstName">
                                          <Input style={{ width: '70%' }} />
                                    </Form.Item>
                              </Col>
                              <Col span={10}>
                                    <Form.Item
                                          label="Last name :"
                                          rules={[{ required: true, message: 'Please input your phone Last name!' }]}
                                          name="lastName">
                                          <Input style={{ width: '70%' }} />
                                    </Form.Item>
                              </Col>
                        </Row>

                        <Row>
                              <Col span={7}>
                                    <Form.Item label="Birthday :" >
                                          <DatePicker style={{ width: '80%' }} format={dateFormat}
                                                name="birthday"
                                                onChange={handleChangeDate}
                                                id="birthday"
                                                rules={[{ required: true, message: 'Please input your Birth!' }]} 
                                                />
                                    </Form.Item>
                              </Col>
                              <Col span={10}>
                                    <Form.Item label="Nationality"
                                          name="nationality"
                                    >
                                          <Select>
                                                <Option value="Thai">Thai</Option>
                                                <Option value="British">British</Option>
                                                <Option value="American">American</Option>
                                          </Select>
                                    </Form.Item>
                              </Col>
                        </Row>
                        <Row>
                              <Col span={10}>
                                    <Form.Item
                                          label="Citizen Id :"
                                          name="citizen"
                                    >
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                        <Row>
                              <Col span={10}>
                                    <Form.Item  label="Gender:"  name="gender">
                                          <Radio.Group>
                                                <Radio value="Male">Male</Radio>
                                                <Radio value="Female">Female</Radio>
                                                <Radio value="Unisex">Unisex</Radio>
                                          </Radio.Group>
                                    </Form.Item>
                              </Col>
                        </Row>
                        <Row>
                              <Col span={10}>
                                    <Form.Item
                                          name="phone"
                                          label="Phone Number :"
                                          rules={[{ required: true, message: 'Please input your phone number!' }]}
                                          name="mobilePhone"
                                    >
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                        <Row>
                              <Col span={10}>
                                    <Form.Item
                                          label="Passpoet No :"
                                          name="passport"
                                    >
                                          <Input />
                                    </Form.Item>
                              </Col>
                        </Row>
                        <Row>
                              <Col span={10}>
                                    <Form.Item
                                          label="Expected Salary :"
                                          rules={[{ required: true, message: 'Please input Expexted salary!' }]}
                                          name="expectedSalary"
                                    >
                                          <Input />
                                    </Form.Item>
                              </Col>
                              <Col span={14}>
                                    <Form.Item>
                                          <Button type="primary" htmlType="submit"
                                                style={{ float: 'right', margin: '0 25% 0 0' }}>Submit</Button>
                                    </Form.Item>
                              </Col>
                        </Row>
                  </Form>
            </div>
      )
}
export default ModalForm