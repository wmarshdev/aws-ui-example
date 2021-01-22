import React from 'react';
import './App.css';
import { AppLayout, Badge, Button } from '@awsui/components-react';

function App() {
  return (
    <div className="App">
      <main>
        <AppLayout content={
          <div>

            <Button onClick={() => window.alert("I was clicked")}>I am a button!</Button>
            <Badge color="blue">I am a badge!</Badge>
          </div>

        }/>
      </main>
    </div>
  );
}

export default App;
