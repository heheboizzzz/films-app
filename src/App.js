import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navigation from './Components/Header/Navigation/Navigation';
import Main from './Components/Header/Main';
import Footer from './Components/Header/Footer/Foooter';



function App() {
  return (
    <div  className="App">
    <Navigation/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;