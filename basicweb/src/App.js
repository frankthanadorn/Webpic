import AppHeader from './components/AppHeader';
import './App.css';
import TattooItem from './components/TattooItem';

const tattoos =[ {
    title: "แขนเท่ๆ",
    thumbnailUrl :"/images/tattoo-01-small.jpg"
                
},
{
    title: "มือเท่ๆ",
    thumbnailUrl :"/images/tattoo-02-small.jpg"
                
}
,
{
    title: "คอเท่ๆ",
    thumbnailUrl :"/images/tattoo-03-small.jpg"
                
},
{
    title: "หลังเท่ๆ",
    thumbnailUrl :"/images/tattoo-04-small.jpg"
                
}
];
function App() {
   const tatooElements = tattoos.map((tattoo,index) =>{
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
