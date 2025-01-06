import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "../features/books/bookSlice";
import BookList from "../components/books/BookList";
const Books = () => {
  const dispatch = useDispatch();
  let { books, status, error } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (error) {
    return (
      <div className="container">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
          <div
            className="spinner-border text-warning"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <p className="text-center text-secondary mt-2">Loading books..</p>
      </div>
    );
  }

  return (
    <main>
      <BookList books={books} />
    </main>
  );
};

export default Books;
