
const BookList = (props) => {
    return (
        <section id="bookSection">
            {props.bookArr.map((book, i) => {
                return (
                    <div className="book" key={i} onClick={() => props.addToShelf(i)}>
                        <img width="200px" src={book.img} alt="fake alt" />
                        <h4>{book.title}</h4>
                    </div>
                )
            })}
        </section>
    )
}

export default BookList;