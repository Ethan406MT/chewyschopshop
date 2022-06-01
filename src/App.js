
import './App.css';
import { Footer, Aboutus, Anotherpage, Header } from './containers';
import { Contactus, Gallery, Homepage, Navbar }from './components';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      
      
      
      
    
    <Gallery /><Aboutus />
    <Contactus /> <Footer /> 
    </div>
  )
}


export default App;
