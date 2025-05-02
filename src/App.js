import "./App.css";
import Header from "./component/Header/";
import Footer from "./component/Footer";
import Hi from "./component/Main/Hi";
import { Route, Routes } from "react-router-dom";
import Works from "./component/page/Works";
import Blog from "./component/page/Blog";
import Contact from "./component/page/Contact";
import Placeholder from "./component/page/lesson-4/Placeholder";
import Creat from "./component/page/CreateProduct";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Hi />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placeholder" element={<Placeholder />} />
        <Route path="/createProduct" element={<Creat />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
