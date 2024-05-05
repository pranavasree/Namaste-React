import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>Rating {avgRatingString} Stars</h5>
      <h5>Delivery time {sla.slaString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
