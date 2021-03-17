import AppHeader from './components/AppHeader';
import './App.css';
import TattooItem from './components/TattooItem';
import tattoos from './components/tattoo';
import { useState } from 'react';
import TattooPost from './components/TattooPost';
import AppSearch from './components/AppSearch';

function App() {
    const [selectedTattoo,setSelectedTattoo] = useState(null);
   
    const [searchText,setSearchText]=useState('');


    function onTattooOpenClick(theTattoo){
        setSelectedTattoo(theTattoo);
    }
    function onTattooCloseClick(){
        setSelectedTattoo(null);
    }


    const tattooElements = tattoos.filter((tattoo)=> {
        return tattoo.title.includes(searchText);
    }).map((tattoo,index) =>{
    return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick}/>;
   });

   let tattooPost = null;
   if (!!selectedTattoo){
       tattooPost = <TattooPost tattoo = {selectedTattoo} onBgClick={onTattooCloseClick}/>

   }


    return (
        <div className="App">
          <AppHeader/>
          <AppSearch value ={searchText} onValueChange={setSearchText}/>
          <div className ="app-grid">
                {tattooElements}
                
          </div>
          {tattooPost}
        </div>
    );
}

export default App;
