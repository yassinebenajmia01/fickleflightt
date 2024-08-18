import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Component/header";
import Footer from "./Component/footer";
import Footerr from "./Component/footerr";
import Popular from "./Component/popular";
import ViewMore from "./Component/viewmore";
import Bar from "./Component/bar";
import Recent from "./Component/recent";
import Prepare from "./Component/prepare";
import Holiday from "./Component/holiday";
import Stays from "./Component/stays";
import Search from "./pages/search";
import AllHolidays from './Component/allholidays';
import AllStays from './Component/allstays';
import Booked from './pages/booked';
import Hotels from './pages/hotels';
import Maps from './pages/map';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={
            <>
              <Header />
              <Bar />
              <Recent />
              <Prepare />
              <Popular />
              <Holiday />
              <Stays />
            </>
          } />
          <Route path="/viewmore" element={<><Header /><ViewMore /></>} />
          <Route path="/search" element={<><Header /><Search /><Booked/></>} />
          <Route path="/explore" element={
            <>
              <Header />
              <Bar />
              <Recent />
              <Prepare />
              <Popular />
              <Holiday />
              <Stays />
            </>
          } />
          <Route path="/allholidays" element={<><Header /><AllHolidays /></>} />
          <Route path="/allstays" element={<><Header /><AllStays /></>} />
          <Route path="/hotels" element={<><Header /><Hotels/><Maps/></>} />


        </Routes>
      </Router>
      <Footer />
      <Footerr />
    </>
  );
}

export default App;
