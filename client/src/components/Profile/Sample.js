import React from 'react';
import { OrgDiagram} from 'basicprimitivesreact';
import { PageFitMode} from 'basicprimitives';
import './styles.css';



const App=({items})=> {

  const config = {
    pageFitMode: PageFitMode.AutoSize,
    autoSizeMinimum: { width: 100, height: 100 },
    cursorItem: 0,
    highlightItem: 0,
    items
  };

  return (
    <div className="App">
      <OrgDiagram centerOnCursor={true} config={config} />

  
    </div>
  );
}

export default App;