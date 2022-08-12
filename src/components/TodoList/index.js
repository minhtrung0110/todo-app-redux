import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch,useSelector} from "react-redux";
import {addToDo} from '../../redux/actions';
import {todosRemainingSelector} from '../../redux/selectors'
import { v4 as uuidv4 } from 'uuid'
import {useState} from "react";
export default function TodoList() {
  const dispatch = useDispatch()
  const [todoName,setToDoName]=useState('')
  const [prioriry,setPriority]=useState('Medium')

  const todoList=useSelector(todosRemainingSelector)

  const handleAddButtonClick =()=>{
    dispatch(addToDo({
      id:uuidv4(),
      name:todoName,
      completed:false,
      prioriry:prioriry
    }))
    setPriority('Medium')
    setToDoName('')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map((item, index)=>(
              <Todo
                  key={index}
                  id={item.id}
                  name={item.name}
                  priority={item.priority}
                  completed={item.completed} />
          ))
        }

      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e)=>setToDoName(e.target.value)}  />
          <Select defaultValue="Medium" onChange={(value)=>setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
