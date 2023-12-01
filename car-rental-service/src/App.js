import './App.css';
import CarSorting from './components/CarSorting';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <Home />
        <CarSorting />
        <Hero />
      </div>
    </div>
  );
}

export default App;
