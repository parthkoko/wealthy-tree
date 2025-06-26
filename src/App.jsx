// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import News from "./pages/news";
import Blogs from "./pages/blogs";
import InvestmentServices from "./pages/InvestmentServices";
import InsuranceServices from "./pages/insuranceservices";
import TaxServices from "./pages/taxservices";
import ContactUs from "./pages/contactus";
import Footer from "./components/footer";

function App() {
  useEffect(() => {

    console.log("Powered by KOKO STUDIO")
  }, [])

  return (
    <Router>
      {/* If Header is meant to be visible on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/news" element={<News />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/investmentservices" element={<InvestmentServices />} />
        <Route path="/insuranceservices" element={<InsuranceServices />} />
        <Route path="/taxservices" element={<TaxServices />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
