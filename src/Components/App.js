import './App.css';
import { render } from '@testing-library/react';
import Title from './Title/Title'
function App() {
  return (
    <div className="App">
     <div className="container">
       <h1 className="display-6">Hello World</h1>
       
       <Title/>
     </div>
    </div>
  );
}

export default App;
