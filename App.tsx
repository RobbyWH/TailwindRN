import * as React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Hello from './src/Hello';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Hello />
    </TailwindProvider>
  );
};

export default App;