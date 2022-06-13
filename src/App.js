import './App.css';
import About from './components/About';
import NavBar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* <NavBar/> */}
    <NavBar title='Word Formating Tool' contact='Contact Us' home='Home'search='Search'/>
    {/* <div className="container">
    <TextForm heading='Heading1'/>
    </div> */}
    {/* <TextForm heading='Enhance your Text Format'/> */}
    <About/>

    </>
  );
}

export default App;
