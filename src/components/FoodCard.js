

function FoodCard(props){
    function OrderNow(){
        console.log("Ordered: " + props.name);
    }
    return (
        <div className="food-card">
            <div className="food-header">
                <img className="food-img" src= {props.img} alt="burgerImg"/>
                <p className="food-ratings"> {props.ratings} ({props.votes})</p>
            </div>
            <h2 className="food-card-title">
            {props.name}
            </h2>
            <h3 className="food-price">Rs. {props.price}</h3>
            <p className="food-desc"> {props.desc}  </p>
            
            
            <button className="order-button" onClick= {OrderNow}> Order Now</button>
        </div>
    );
}
export default FoodCard;