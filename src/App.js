import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './context/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
