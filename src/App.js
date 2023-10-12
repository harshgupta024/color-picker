import React from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;