const SuccessStorySlide = ({ name, review, ratingIcon, quoteIcon }) => (
  <div className="rounded-[20px] p-[30px] md:p-[60px] border border-gray-200">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={ratingIcon} alt="Star" />
        ))}
      </div>
      <div>
        <img src={quoteIcon} alt="Quote Icon" />
      </div>
    </div>
    <div className="details-story">
      <p>{review}</p>
    </div>
    <div className="profile-client flex items-center gap-1">
      <strong className="text-xl">-</strong>
      <div className="profile-detail">
        <h4>{name}</h4>
      </div>
    </div>
  </div>
);

export default SuccessStorySlide;
