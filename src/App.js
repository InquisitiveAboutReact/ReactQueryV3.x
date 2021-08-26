import {useState} from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';



function App() {

  const [pages, setPages] = useState('planets')
  return (
    <div className="App">
       <h2>Welcome to Star Wars using React Query</h2>
       <Navbar setPages={setPages}/>
       <div className='content'>
       {pages === 'planets' ? <Planet /> : <People />}

       </div>
    </div>
  );
}

export default App;
