import logo from './logo.svg';
import './styles/App.css';
import { About } from './components/About';
import { Home
 } from './components/Home';
 import { People } from './components/People';
 import { SingelPerson } from './components/singelPerson';
 import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Loading } from './components/Loading';
import { useEffect,useState } from 'react';
import axios from "axios";
import { ErrorBoundary ,useErrorHandler} from 'react-error-boundary';
import { FallBack } from './components/FallBack';
import { SharedLayout } from './components/sharedLayout';
import { Signup } from './components/SignUp';
 
function App() {
  const [results, setResults] = useState([]);
  const [loading,setloading]=useState (false)
  

  useEffect(() => {
    const fetchData = () => {
      setloading(true)
        axios.get("https://randomuser.me/api/?results=50").then((response) => {
          const resp = response.data;
          setResults(resp.results);
          console.log(results);
        });
      
      }
    setTimeout(()=>{
      setloading(false)
    },1000)
    
    fetchData();
  
  }, []);
  return (
     <>
     <ErrorBoundary FallBack={FallBack}>
     {loading?<Loading/>:<SharedLayout>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/People' element={<People results={results}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='*' element={<h4>page not found</h4>}/>

      <Route path='/person/:id' element={<SingelPerson results={results} />}/>
       </Routes>
     </SharedLayout>
     
       }
       </ErrorBoundary>
     
     </>
   
     

  
  
  );
}

export default App;
