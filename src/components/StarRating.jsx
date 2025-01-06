const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;

  return (
    <span>
      {"★".repeat(fullStars)}
      {halfStar ? "½" : ""}
    </span>
  );
};

export default StarRating;
