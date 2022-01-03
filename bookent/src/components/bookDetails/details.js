import BookCss from './style.module.css';
import defaultCover from '../assets/read1.svg'
import { lazy, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Mapp = lazy(() => import('./Map2'))

function Details({ book, user, addToFav, startConv, ownerBooks }) {
    let favBefore = false

    if (user?.favList && user?.favList.length > 0) {
        for (let i = 0; i < user?.favList.length; i++) {
            if (book._id === user.favList[i]._id)
                favBefore = true
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [book])

    function copyNum() {
        navigator.clipboard.writeText(book.ownerPhone)
        alert('phone copied !')
    }


    function favSm(_id) {
        if (user?.favList && user?.favList.length > 0) {
            for (let i = 0; i < user?.favList.length; i++) {
                if (_id === user.favList[i]._id)
                    return true
            }
        }
    }
    return (
        <>
            <main className={BookCss.book}>
                <div className={BookCss.upperdetails}>
                    <section className={BookCss.details}>
                        <p className={BookCss.bookname}>{book.bookName}</p>
                        <p className={BookCss.bookgen}>Genere : {book.bookGenere}</p>
                        <p className={BookCss.booktime}>Loan time : {book.time} days</p>
                        <div className={BookCss.love}>
                            <input type='checkbox' checked={favBefore} onChange={(e) => { addToFav(e.target.checked, book) }} />
                            <img src="/assets/love.svg" alt='add to favourites' />
                        </div>
                        <p className={BookCss.bookowner}>Author : {book.author}</p>
                        <p className={BookCss.bookowner}>Year : {book.Year}</p>
                        <p className={BookCss.bookowner}>ISBN : {book.isbn}</p>
                        <p className={BookCss.bookowner}>Country :  {book.country}</p>
                        <p className={BookCss.bookowner}>Owner : {book.owner}</p>
                        <div className={BookCss.contacts}>
                            <button className={BookCss.booknum} onClick={copyNum}>
                                <p> {book.ownerPhone}</p>
                                <div><img src='/assets/phone.svg' alt='number phone' /></div>
                            </button>
                            {user._id != book.ownerId &&
                                <button onClick={startConv} className={BookCss.chat}>
                                    <img src='/assets/message.svg' alt='message' alt='chat' />
                                </button>
                            }
                        </div>
                    </section>
                    <section className={BookCss.bookcover}>
                        <img src={book.coverPhoto ? `${book.coverPhoto}` : `${defaultCover}`} alt={book.bookName} />
                    </section>
                </div>
                <div className={BookCss.lowerdetails}>
                    <p className={BookCss.bookdesc}>{book.description}</p>

                    <div className={BookCss.bookLocation}>
                        <Mapp
                            GeoLA={book.location[0].split(',')[0]}
                            GeoLO={book.location[0].split(',')[1]}

                        />
                    </div>

                    {ownerBooks?.length > 1 &&
                        <div className={BookCss.ownerBooks}>
                            <h4>Also by this user :</h4>
                            {ownerBooks &&
                                ownerBooks.map((bk) => (
                                    bk._id != book._id &&
                                    <div className={BookCss.book} style={{ backgroundImage: bk.coverPhoto ? `url(${bk.coverPhoto})` : `url(${defaultCover})` }}>
                                        <div className={BookCss.bookdetails}>
                                            <Link to={{ pathname: `/Book/${bk._id}`, state: { book: bk } }}>
                                                <p className={BookCss.bookname}>{bk.bookName}</p>
                                            </Link>
                                            <div className={BookCss.love}>
                                                <input type='checkbox' checked={favSm(bk._id)} onChange={(e) => { addToFav(e.target.checked, bk) }} />
                                                <img src="/assets/love.svg" alt='add to favourites' />
                                            </div>
                                            <p className={BookCss.bookgen}>Genere: {bk.bookGenere}</p>
                                            <p className={BookCss.bookdesc}>{bk.description}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    }
                </div>
            </main>
        </>
    );
}

export default Details;