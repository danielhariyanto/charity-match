import React from 'react';
import MapView from './components/map/MapView';
import MapSelector from './components/mapselector/MapSelector';
import Quiz from './components/quiz/Quiz';
import Navigation from './components/navigation/Navigation';
import './App.css';
import styles from './App.module.css';
//import { BrowserRouter, Route, Switch} from 'react-router-dom';
import mapselector from './components/mapselector/MapSelector';

class App extends React.Component {
  render(){
    return ( 
      
      <div className={styles.container}>
        <Quiz />
        <MapSelector />
        <MapView />
      </div>
    );
  }
}

export default App;