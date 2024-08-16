import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bar from "./Component/bar";
import Footer from "./Component/footer";
import Footerr from "./Component/footerr";
import Header from "./Component/header";
import Popular from "./Component/popular";
import Prepare from "./Component/prepare";
import Recent from "./Component/recent";
import Stays from "./Component/stays";
import ViewMore from "./Component/viewmore";
import Holiday from "./Component/holiday";
import AllHolidays from "./Component/allholidays";

function App() {
  return (
    <Router>
      <Header />
      <Bar />
      <Recent />
      <Prepare />


      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/viewmore" element={<ViewMore />} />
        <Route path="/allholidays" element={<AllHolidays />} />
      </Routes>
      <Holiday />


      <Stays />
      <Footer />
      <Footerr />
    </Router>
  );
}

export default App;
