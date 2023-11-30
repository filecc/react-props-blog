import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-200">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
