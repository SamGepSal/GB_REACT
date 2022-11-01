import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export const Form = ({data, setData, setMessage}) => {
  
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
        <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
            placeholder='Имя' value={author} onChange = {(e) => 
                setData(prevstate => ({...prevstate,author: e.target.value}))}/>
        <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
            placeholder='Текст' value={text} onChange = {(e) => 
                setData(prevstate => ({...prevstate,text: e.target.value}))}/>
        <Button type='submit' variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
    </form>

  )
  
  }

 
