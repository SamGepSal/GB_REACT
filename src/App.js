import React, {useState, useEffect} from 'react';
import { Form } from './components/messageList-lesson2/MessageList';
import { Message } from './components/messageList-lesson2/Message';
import "./components/App.scss";

export const App = () => {
  
  const [messageList, setMessageList] = useState([
    {
      text: 'Привет!',
      author: 'Антон'
    },
    {
      text: 'Привет!',
      author: 'Алина'
    },
    {
      text: 'Как Дела?',
      author: 'Антон'
    }

  ])
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })
  

  const RobotMessage = 'Ваше сообщение отправлено'

useEffect(()=>{
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
        setTimeout(()=>{
            setMessageList(prevstate => [...prevstate, {text: RobotMessage, author: 'robot'}])
        }, 1500)
    }
}, [messageList]);

  return (
    <div className="App">
      <Form data = {messageBody} setData = {setMessageBody} setMessage = {setMessageList}></Form>
      <div className='messageList'>
        <span className='message'>
        {
          messageList.map((e,i) => <Message text={e.text} author={e.author} key={i}/>)
        }
        </span>
      </div>
    </div>
  );
};

