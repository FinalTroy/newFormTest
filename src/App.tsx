import React from 'react';
import { Main } from './components/Main';
import { FormProvider } from './context/Context';
function App() {
  return (
    <FormProvider>
      <Main />
    </FormProvider>
  );
}

export default App;
