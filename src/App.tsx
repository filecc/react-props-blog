import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [ isFocused, setIsfocused ] = useState(false)
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-200">
      <Header isFocused={isFocused} />
      <Main setIsfocused={setIsfocused} />
      <Footer isFocused={isFocused} />
    </div>
  );
}

export default App;
