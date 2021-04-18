import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Technologies from './components/Technologies /Technologies';
import ContactForm from './components/ContactForm/ContactForm';
import './components/background/bg';

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
