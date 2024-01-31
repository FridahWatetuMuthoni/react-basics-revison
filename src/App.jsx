import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideComponent from "./components/SideComponent/SideComponent";

function App() {
  return (
    <main className="container">
      <Header />
      <SideComponent />
      {/* <Greetings isLoggedIn={true} username="Brocode" /> */}
      <Footer />
    </main>
  );
}

export default App;
