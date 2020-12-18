
const Shelf = (props) => {
    if (props.shelfArr.length > 0) {
        return (
            <div id="shelf">
                <h2>My Shelf:</h2>
                <button onClick={props.clearShelf}>CLEAR SHELF</button>
                {props.shelfArr.map((book, i) => {
                    return <p key={i} onClick={() => props.removeFromShelf(i)}>{book.title}</p>
                })}
            </div>
        )
    } else {
        return (
            <div id="shelf">
                <h2>Your Shelf is empty!</h2>
                <h4>Click on Books to add to your shelf!</h4>
            </div>
        )

    }

}

export default Shelf;