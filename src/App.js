import React from 'react';
import MapView from './components/map/MapView';
import MapSelector from './components/mapselector/MapSelector';
import Quiz from './components/quiz/Quiz';
import './App.css';
import styles from './App.module.css';
//import { BrowserRouter, Route, Switch} from 'react-router-dom';
import mapselector from './components/mapselector/MapSelector';

class App extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <div>
          <Quiz />
          <MapView />
          <MapSelector />
        </div>
        <div>

        
          
        </div>
      </div>
      
     
    );
  }
}

export default App;