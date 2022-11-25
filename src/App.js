import GlobalStyle from "./GlobalStyles";
import FirstPage from "./pages/first/FirstPage";
import { Route, Routes } from "react-router-dom";
import Second from "./pages/second/Second";

function App() {
  //Sorry i used styled components, it's totally inconsequential for now.
  //This still definitely needs a lot improving, i want something exactly similar to the drag & hold feature IOS has.

  //TODO: I planned to use AOS for a bit of "fade-left" effect, but i doubt it'd give what i want.

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </div>
  );
}

export default App;
