import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <main className="container">
      <Header />
      <Counter />
      {/* <Greetings isLoggedIn={true} username="Brocode" /> */}
      <Footer />
    </main>
  );
}

export default App;
