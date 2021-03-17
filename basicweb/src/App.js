import AppHeader from './components/AppHeader';
import './App.css';
import TattooItem from './components/TattooItem';
import Tattoos from './components/Tattoos';


function App() {
   const tatooElements = Tattoos.map((tattoo,index) =>{
       return <TattooItem key={index} tattoo={tattoo}/>;
   })

    return (
        <div className="App">
          <AppHeader/>
          <div className ="app-grid">
                {tatooElements}
                
          </div>
          
        </div>
    );
}

export default App;
