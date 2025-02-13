import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ContactUs from './Components/ContactUs';
import FormSection from './Components/FormSection';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ContactUs/>
      <FormSection/>
    </div>
  );
}

export default App;
