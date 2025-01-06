import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { addBook, updateBook } from "../features/books/bookSlice";

const ManageBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRequired, setIsRequired] = useState(true);
  const { operation } = useParams();
  const bookDetails = useLocation().state?.bookDetails;
  const { status, error } = useSelector((state) => state.book);
  const [disabled, setDisabled] = useState("");

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publishedYear: null,
    genre: [],
    language: "",
    country: "",
    rating: null,
    summary: "",
    coverImageUrl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "publishedYear" || name === "rating") {
      setBookData((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setBookData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (operation === "update" && bookDetails) {
      setIsRequired(false);
      setBookData((prev) => ({
        ...prev,
        title: bookDetails.title || "",
        author: bookDetails.author || "",
        publishedYear: bookDetails.publishedYear || null,
        genre: bookDetails.genre || [],
        language: bookDetails.language || "",
        country: bookDetails.country || "",
        rating: bookDetails.rating || null,
        summary: bookDetails.summary || "",
        coverImageUrl: bookDetails.coverImageUrl || "",
      }));
    }
  }, [operation]);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisabled("disabled");
    if (operation === "update") {
      const bookId = bookDetails._id;
      dispatch(updateBook({ bookId, bookData }));
      if (status === "success") {
        setTimeout(() => {
          navigate(`/book/${bookDetails._id}`);
        }, 1000);
      }
    }
    if (operation === "add") {
      dispatch(addBook(bookData));
      if (status === "success") {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
  };

  return (
    <div className="container py-5">
      <section>
        <h1>{operation === "add" ? `Add` : `Update`} Book</h1>
        <form className="mt-3" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="BookTitle"
                  id="bookName"
                  value={bookData.title ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="bookName">Title</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  placeholder="author"
                  id="authorName"
                  value={bookData.author ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="authorName">Author</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  name="publishedYear"
                  id="publishedYear"
                  max={new Date().getFullYear()}
                  className="form-control"
                  placeholder="2000"
                  value={bookData.publishedYear ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="publishedYear">Published Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  placeholder="genre"
                  className="form-control"
                  value={bookData.genre}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="genre">Genre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="language"
                  id="language"
                  className="form-control"
                  placeholder="language"
                  value={bookData.language ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="language">Language</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="country"
                  className="form-control"
                  value={bookData.country ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="country">Country</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  id="rating"
                  name="rating"
                  placeholder="0"
                  className="form-control"
                  value={bookData.rating ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="rating">Rating</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  id="summary"
                  name="summary"
                  className="form-control"
                  rows="4"
                  placeholder="Summary of the book"
                  value={bookData.summary ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                ></textarea>
                <label htmlFor="summary">Summary</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="coverImageUrl"
                  id="coverImage"
                  className="form-control"
                  placeholder="Cover Image Link"
                  value={bookData.coverImageUrl ?? ""}
                  onChange={onChangeHandler}
                  required={isRequired}
                />
                <label htmlFor="coverImage">Cover Image Link</label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button
              type="submit"
              className={`btn btn-${
                operation === "add" ? "primary" : "warning"
              } px-5 ${disabled}`}
            >
              {status === "adding" || status === "updating" ? (
                <span>{status}...</span>
              ) : (
                <span>{operation === "add" ? "Add" : "Update"} Book</span>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ManageBooks;
