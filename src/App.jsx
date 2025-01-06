import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Books from "./pages/Books";
import BookDetails from "./components/books/BookDetails";
import Footer from "./components/Footer";
import ManageBooks from "./pages/Manage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/manage/:operation" element={<ManageBooks />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
