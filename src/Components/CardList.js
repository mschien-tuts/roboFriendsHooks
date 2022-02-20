import Card from "./Card";
import React from "react";

const CardList = ({robots}) => {
    return (
        <div className={"CardList"}>
            {robots.map(user => (
                <Card
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                />))
            }
        </div>
    )
//    hello
}

export default CardList;