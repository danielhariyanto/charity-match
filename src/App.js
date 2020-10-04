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
<<<<<<< HEAD
    return ( 
      
=======
    return (
>>>>>>> baf9314793d83f197751f21c97bd3fdeef666d5d
      <div className={styles.container}>
        <Quiz />
        <MapSelector />
        <MapView />
      </div>
    );
  }
}

export default App;