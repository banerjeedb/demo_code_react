import './App.css';
import ListPosts from './components/ListPosts';
import axios from 'axios';
import {useState} from 'react';

function App() {
    const[response, setResponse] = useState([]);
    const[isVisible, setIsVisible] = useState(true);

     const fetchData = async() => {
         const res = await
                 axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=> res.data).catch((err)=> console.log(err));
                 setResponse(res);
                 setIsVisible(false);
               }

  return (
    <div className="App">
      <header className="App-header">
      {isVisible &&
      <div>
            <p>
              Welcome To Post Data
            </p>
            <button onClick={fetchData}>
              List Posts
            </button>
        </div>
        }
        <div>
          <ListPosts response={response} isVisible={isVisible}/>
        </div>
      </header>
    </div>
  );
}

export default App;
