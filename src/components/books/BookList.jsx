import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <section>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4">
          {books.map((book) => (
            <div className="col" key={book._id}>
              <Link
                to={`/book/${book._id}`}
                className="btn btn-sm btn-outline-warning border-0 rounded-3"
              >
                <div
                  className="card"
                  style={{ height: "250px", width: "190px" }}
                >
                  <div>
                    <img
                      className="card-img-top img-fluid"
                      src={book.coverImageUrl}
                      alt={book.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-secondary">
                      <small>by </small>
                      {book.author}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
