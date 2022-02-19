import './Card.css';

const Card = ({id, username, email}) => {
    return (
        <div className={"Card"}>
            <img src={`https://robohash.org/${id}/?200x200`} alt="A robot"/>
            <div>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;