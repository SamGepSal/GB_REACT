import React, {useRef, useEffect, useCallback} from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

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
    const ariaLabel = { 'aria-label': 'description' };

    const authorInput = useRef();

    const clickForFocus = () => {
        authorInput.current?.focus();
    }

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
    onSubmit = {submitForm}>
        <Input inputProps={ariaLabel}  placeholder='Имя' autoFocus inputRef={authorInput} value={author} onChange = {(e) => 
                setData(prevstate => ({...prevstate,author: e.target.value}))}/>
            
        
        <Input inputProps={ariaLabel} placeholder='Текст' value={text} onChange = {(e) => 
                setData(prevstate => ({...prevstate,text: e.target.value}))}/>
        <Button type='submit' variant="contained" onClick={clickForFocus} endIcon={<SendIcon />}>
            Send
        </Button>
    </Box>

  )
  
  }

 
