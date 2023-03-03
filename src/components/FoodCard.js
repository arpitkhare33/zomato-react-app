function FoodCard(props){
    return (
        <div className="food-card">
            <img className="food-img" src= {props.img} alt="burgerImg"/>
            <h2 className="food-card-title">
            {props.name}
            </h2>
            <p className="food-desc"> {props.desc}  </p>
            <p className="food-price">Rs. {props.price}</p>
            <p className="food-ratings"> {props.ratings}</p>
            <p className="food-votes"> {props.votes}</p>
        </div>
    );
}
export default FoodCard;