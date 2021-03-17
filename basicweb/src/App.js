import AppHeader from './components/AppHeader';
import './App.css';
import TattooItem from './components/TattooItem';

function App() {
   
    return (
        <div className="App">
          <AppHeader/>
          <div className ="app-grid">
                <TattooItem/>
                <TattooItem/>
                <TattooItem/>
                <TattooItem/>
                
          </div>
          
        </div>
    );
}

export default App;
