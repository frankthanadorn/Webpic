import AppHeader from './components/AppHeader';
import './App.css';
import TattooItem from './components/TattooItem';

function App() {
   
    return (
        <div className="App">
          <AppHeader/>
          <div className ="app-grid">
                <TattooItem title="แขนเท่ๆ" thumbnailUrl ="/images/tattoo-01-small.jpg"/>
                <TattooItem title="มือเท่ๆ" thumbnailUrl ="/images/tattoo-02-small.jpg"/>
                <TattooItem title="คอเท่ๆ" thumbnailUrl ="/images/tattoo-03-small.jpg"/>
                <TattooItem title="หลังเท่ๆ" thumbnailUrl ="/images/tattoo-04-small.jpg"/>
                
                
          </div>
          
        </div>
    );
}

export default App;
