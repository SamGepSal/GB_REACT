import React, {useState, useEffect} from 'react';
// import { Form } from './components/messageList-lesson2/MessageList';

export const App = () => {
  
  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })
  

  const RobotMessage = 'Hello! Thank you for your review!'

useEffect(()=>{
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
        setTimeout(()=>{
            setMessageList(prevstate => [...prevstate, {text: RobotMessage, author: 'robot'}])
        }, 1500)
    }
}, [messageList])

  return (
    <div className="App">
      <Form data = {messageBody} setData = {setMessageBody} setMessage = {setMessageList}></Form>
      <div className='messageList'>
        {
          messageList.map((e,i) => <Message text={e.text} author={e.author} key={i}/>)
        }
      </div>
    </div>
  );
}

const Form = ({data, setData, setMessage}) => {
  
  const {text, author} = data;

  const submitForm = (e) => {
      e.preventDefault()
      if (text.length > 0) {
          setMessage(prevstate => [...prevstate, {text, author}])
      }
      setData({
          text: '',
          author: ''
      })
  }
return (
  <form onSubmit = {submitForm}>
      <input placeholder='Имя' value={text} onChange = {(e) => 
      setData(prevstate => ({...prevstate,text: e.target.value}))} />

      <input placeholder='Текст' value={author} onChange = {(e) => 
      setData(prevstate => ({...prevstate,author: e.target.value}))} />

      <button type='submit'>Send</button>
  </form>
)

}

const Message = ({author, text}) => {
  <div>
    <hr/>
    <h1>{text}</h1>
    <hr/>
    <p>{author}</p>
  </div>
}

