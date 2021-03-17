import AppHeader from './components/AppHeader';
import './App.css';
import TattooItem from './components/TattooItem';
import tattoos from './components/tattoo';
import { useState } from 'react';
import TattooPost from './components/TattooPost';

function App() {
    const [selectedTattoo,setSelectedTattoo] = useState(null);
   
    const [searchText,setSearchText]=useState('');


    function onTattooOpenClick(theTattoo){
        setSelectedTattoo(theTattoo);
    }
    function onTattooCloseClick(){
        setSelectedTattoo(null);
    }

    const tattooElements = tattoos.map((tattoo,index) =>{
    return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick}/>;
   });

   let tattooPost = null;
   if (!!selectedTattoo){
       tattooPost = <TattooPost tattoo = {selectedTattoo} onBgClick={onTattooCloseClick}/>

   }


    return (
        <div className="App">
          <AppHeader/>
          <div className="app-search">
              <input className="app-search-input"
              type="text"
              placeholder="ลองหาสักหน่อยปะหละ"
              value={searchText}
              onChange={(event) => {setSearchText(event.target.value)}}

              />
          </div>
          <div className ="app-grid">
                {tattooElements}
                
          </div>
          {tattooPost}
        </div>
    );
}

export default App;
