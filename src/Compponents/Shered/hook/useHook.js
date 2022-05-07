import { useEffect, useState } from "react"

const useBooks = () => {
    const [allBooks, setAllBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/book')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    return [allBooks, setAllBooks]
}
export default useBooks;