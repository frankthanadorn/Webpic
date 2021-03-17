import AppHeader from './components/AppHeader';
import './App.css';
import TattooItem from './components/TattooItem';
import tattoos from './components/tattoo';
import { useState } from 'react';
import TattooPost from './components/TattooPost';

function App() {
    const [selectedTattoo,setSelectedTattoo] = useState(tattoos[1]);
   const tattooElements = tattoos.map((tattoo,index) =>{
       return <TattooItem key={index} tattoo={tattoo}/>;
   });

   let tattooPost = null;
   if (!!selectedTattoo){
       tattooPost = <TattooPost tattoo = {selectedTattoo}/>

   }


    return (
        <div className="App">
          <AppHeader/>
          
          <div className ="app-grid">
                {tattooElements}
                
          </div>
          {tattooPost}
        </div>
    );
}

export default App;
