import ConfirmedFilter from "./ConfirmedFilter";
import GuesList from "./GuesList";
import Counter from "./Counter";

function MainContent() {
  return (
    <div className="main">
      <ConfirmedFilter />
      <Counter />
      <GuesList />
    </div>
  );
}

export default MainContent;
