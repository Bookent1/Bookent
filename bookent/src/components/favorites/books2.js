import RestCss from './style.module.css';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import defaultCover from '../assets/read1.svg'
import { AuthContext } from '../../AuthContext'

function Book({ book, addToFav, deleteBook }) {
    const { user } = useContext(AuthContext)
    let favBefore = false

    if (user?.favList && user?.favList.length > 0) {
        for (let i = 0; i < user.favList.length; i++) {
            if (book._id === user.favList[i]._id)
                favBefore = true
        }
    }
    return (
        <>
            <div className={RestCss.book}>
                <div className={RestCss.bookdetails}>
                    <img src={book.coverPhoto ? `${book.coverPhoto}` : `${defaultCover}`} className={RestCss.bookcover} alt={book.bookName} />
                    <div>
                        <Link to={{ pathname: `/Book/${book._id}`, state: { book } }}>
                            <p className={RestCss.bookname}>{book.bookName}</p>
                        </Link>
                        <div className={RestCss.love}>
                            <input type='checkbox' checked={favBefore} onChange={(e) => { addToFav(e.target.checked, book) }} />
                            <img src="../assets/love.svg" alt='add to favourites' />
                        </div>
                        <p className={RestCss.bookgen}>Genere:  {book.bookGenere}</p>
                        <p className={RestCss.bookdesc}>{book.description}</p>

                        <section className={RestCss.edit}>
                            <Link to={{ pathname: `/editBook/${book._id}`, state: { book } }}><button id={RestCss.editBtn}><img src='./assets/edit.svg' alt='edit book' /><span>Edit</span></button></Link>
                            <button onClick={() => deleteBook(book)} id={RestCss.delBtn}><img src='./assets/trash.svg' alt='delete book' /><span>Delete</span></button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;