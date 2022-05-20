import React from "react";
import CardItem from "./CardItem";

const Card = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    );
};

export default Card;
