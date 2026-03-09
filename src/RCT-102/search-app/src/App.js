import { Container } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

function App() {
  return (
    <div>
      <Container className="main-container bg-light p-5">
        <h1>Search App</h1>
        <p>This is a simple search app</p>
        <SearchForm />
      </Container>
      <Results />
    </div>
  );
}

export default App;
