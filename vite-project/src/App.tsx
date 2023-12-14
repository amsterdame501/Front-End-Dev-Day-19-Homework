import React from 'react'
import MyButton from './components/MyButton'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import MyForm from './components/MyForm'
import Water from './components/Water'
import Theme from './components/Theme'
import { useState } from 'react'

const App: React.FC = () => {
  return ( 
  <>
    <div className="App">
      <Water />
      <Theme />
    </div>
    </>
  );

  /*
  const [count, setCount] = useState <number> (0);
  return (
      <>
      
      {count}
      <Section title='One Picec'> 
      -Good Morring 
      -Good Night
       </Section>
      <Counter setCount={setCount}> 
      Counter = { count}
      </Counter>
      <List items={["🍎Apple","🍌Banana","🍒Cery","🥭Mango"]} render={(item) => <i>{item}</i>}></List>
      
      <Dashboard></Dashboard>
      </>
  )*/
 
}

export default App