import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Technologies from './components/Technologies /Technologies';
import ContactForm from './components/ContactForm/ContactForm';
import './components/background/bg';
import Theme from './components/Theme/Theme';
// import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Theme />
      <Header />
      <Technologies />
      {/* <Project /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
