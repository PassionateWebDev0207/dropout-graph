import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { DropoutGraphViewer } from './containers';
import './App.css';

library.add(fab, faShareAlt);

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <DropoutGraphViewer />
      </div>
    </div>
  );
}

export default App;
