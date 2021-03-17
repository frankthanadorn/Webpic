import AppHeader from './AppHeader';
import './App.css';
import TattooItem from './Tattooitem';
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
