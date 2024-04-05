import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';

export default function SearchArea() {
    const libraryContent = useSelector((state) => state.library.content);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLib, setFilteredLib] = useState([]);

    useEffect(() => {
        // Si la bibliothèque est chargée, initialise la liste filtrée avec la bibliothèque complète
        if (libraryContent && libraryContent.length > 0) {
            setFilteredLib([...libraryContent]);
        }
    }, [libraryContent]);

    // Met à jour la liste filtrée à chaque changement de searchTerm
    useEffect(() => {
        if (searchTerm.trim().toLowerCase() !== '') {
            const filteredBooks = libraryContent.filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
            );
            setFilteredLib(filteredBooks);
        } else {
            // Si le terme de recherche est vide, affiche la bibliothèque complète
            setFilteredLib([...libraryContent]);
        }
    }, [searchTerm, libraryContent]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="book-cards-area w-full min-h-[50rem] flex flex-col gap-y-2 pt-2">
            <div className="title-area font-semibold text-[1.2rem] mb-4 ml-4">
                <h2>All Books</h2>
            </div>
            <input
                type="text"
                className="search_bar ml-4 mb-4 drop-shadow-xl rounded-xl w-[15rem] h-[3rem] pl-5 border border-black"
                name="search"
                id="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search book"
            />
            <div className="cards-area w-full h-[95%] grid grid-cols-2 gap-x-6 gap-y-6 tablet:grid-cols-3 tablet:gap-x-5 desktopM:gap-x-3 desktopM:grid-cols-4 desktopL:grid-cols-5 desktopxl:grid-cols-6">
                {filteredLib ? (
                    filteredLib.map((singleData) => {
                        return <BookCard key={singleData.id} dataBook={singleData} />;
                    })
                ) : (
                    <p>Loading</p>
                )}
            </div>
        </div>
    );
}
