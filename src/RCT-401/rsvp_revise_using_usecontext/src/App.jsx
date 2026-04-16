import { GuestProvider } from "./context/GuestContext.jsx";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <GuestProvider>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </GuestProvider>
  );
}

export default App;
