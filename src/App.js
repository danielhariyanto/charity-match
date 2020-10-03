import React from 'react';

// import map from './components/map/map'
// import quiz from './components/quiz/quiz'
// import mapselecter from './components/mapselecter/mapselecter'

import { map,quiz,mapselecter  } from './components';
import {fetchData } from './api'



class App extends React.Component {
  async componentDidMount(){
    const data = await fetchData();
    console.log(data)
  } 

  render(){
    return ( 
      <div>
        <h1>
          yeehaw
        </h1>
      </div>
    )
  }
}
export default App;
