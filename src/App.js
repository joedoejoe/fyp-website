import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Team from './components/Team';
import Features from './components/Features';
import Docs from './components/Docs';

function App() {
    return (
        <>
            <Navbar />
            <Product />
            <Features />
            <Team />
            <Docs />
        </>
    );
}

export default App;
