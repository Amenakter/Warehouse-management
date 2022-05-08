import { useEffect, useState } from "react"

const useBooks = () => {
    const [allBooks, setAllBooks] = useState([])
    useEffect(() => {
        fetch('https://secret-bastion-00294.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    return [allBooks, setAllBooks]
}
export default useBooks;