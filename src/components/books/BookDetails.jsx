import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteBook } from "../../features/books/bookSlice";
import StarRating from "../StarRating";

const BookDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { books, status, error } = useSelector((state) => state.book);
  const bookDetails = books.find((book) => book._id === params.bookId);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("light");
  const [disabled, setDisabled] = useState("");

  useEffect(() => {
    if (alertMsg) {
      setShowAlert(true);
    }
  }, [alertMsg]);

  const deleteHandler = () => {
    const bookId = bookDetails._id;
    dispatch(deleteBook(bookId));
    if (status === "success") {
      setDisabled("disabled");
      setAlertType("success");
      setAlertMsg("Book deleted successfully!");
    } else if (status === "error") {
      setAlertType("danger");
      setAlertMsg(
        `An error occured while trying to delete Book. Error: ${error}`
      );
    }
  };

  const operationAlert = () => {
    setTimeout(() => {
      setAlertMsg("");
      setAlertType("light");
      setShowAlert(false);
      navigate("/");
    }, 2000);

    return (
      <div className={`alert alert-${alertType} fade show`} role="alert">
        <small>{alertMsg}</small>
      </div>
    );
  };

  const deleteModal = () => {
    return (
      <div className="modal fade" id="deleteStudentModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Delete Book</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-danger">
                Are you sure you want to delete the Book?
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
                onClick={deleteHandler}
              >
                <span className="text-danger">Confirm</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="container py-4">
      {deleteModal()}
      <div>
        <div className="row">
          <div className="col col-lg-4">
            <img
              className="img-fluid rounded-2"
              src={bookDetails.coverImageUrl.replace("50x30", "350x500")}
              alt=""
            />
          </div>
          <div className="col col-lg-8 p-5">
            <h5 className="fs-1">{bookDetails.title}</h5>
            <div className="ps-2">
              <p className="text-secondary">
                <span>{bookDetails.author}</span>
                <br />
                <span>
                  {bookDetails.genre.map((genre, index) => (
                    <button
                      className="badge btn btn-sm text-secondary p-0 me-1"
                      key={index}
                    >
                      <small className="fw-lighter">#{genre}</small>
                    </button>
                  ))}
                </span>
              </p>
              <p className="fw-light">
                <small>Released year: {bookDetails.publishedYear}</small>
              </p>
              <p>
                <StarRating rating={bookDetails.rating} />
              </p>
              <div>
                <h5>Description</h5>
                <p>{bookDetails.summary}</p>
              </div>
            </div>
            <div className="mt-5 pt-3">{showAlert && operationAlert()}</div>
            <div className="d-flex justify-content-end mt-5 pt-5">
              <Link
                to="/manage/update"
                className={`btn btn-sm bg-warning bg-opacity-75 py-1 me-3 px-5 ${disabled}`}
                state={{ bookDetails }}
              >
                <span className="fw-semibold">Update</span>
              </Link>
              <button
                className={`btn btn-sm bg-danger bg-opacity-75 py-1 px-5 ${disabled}`}
                data-bs-toggle="modal"
                data-bs-target="#deleteStudentModal"
              >
                <span className="fw-semibold">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
