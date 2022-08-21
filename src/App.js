import "../src/Global-Style/styles";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import LeftSideNav from "./LeftSideNav";
import { MiddleStyle } from "../src/Global-Style/styles";

function App() {
  return (
    <div className="App">
      <Header />

      <MiddleStyle>
        {" "}
        <LeftSideNav /> <Body />
      </MiddleStyle>

      <Footer />
    </div>
  );
}

export default App;
