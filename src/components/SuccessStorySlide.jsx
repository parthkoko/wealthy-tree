const SuccessStorySlide = ({ name, review, image, ratingIcon, quoteIcon }) => (
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
    <div className="profile-client flex items-center gap-3">
      <div className="profile-icon">
        <img src={image} alt={name} />
      </div>
      <div className="profile-detail">
        <h4>{name}</h4>
      </div>
    </div>
  </div>
);

export default SuccessStorySlide;
