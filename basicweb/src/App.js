import AppHeader from './AppHeader';
import './App.css';

function App() {
   
    return (
        <div className="App">
          <AppHeader/>
          <div className ="app-grid">
              <div className="tattoo-item">
                  <img src="/images/tattoo-01-small.jpg"/>
                  <h4>แมว</h4>
                  </div>
                  <div className="tattoo-item">
                  <img src="/images/tattoo-02-small.jpg"/>
                  <h4>แมว</h4>
                  </div>
                  <div className="tattoo-item">
                  <img src="/images/tattoo-03-small.jpg"/>
                  <h4>แมว</h4>
                  </div>
                  <div className="tattoo-item">
                  <img src="/images/tattoo-04-small.jpg"/>
                  <h4>แมว</h4>
                  </div>
          </div>
        </div>
    );
}

export default App;
