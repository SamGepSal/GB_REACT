import React from 'react';
import { Message} from './components/Message';
import { ClassMessageComp } from './components/ClassMessageComp';

export const App = () => {
  
  return (
    <div className="App">
      <Message name = 'Alina'/>
      <ClassMessageComp />
    </div>
  );
}

