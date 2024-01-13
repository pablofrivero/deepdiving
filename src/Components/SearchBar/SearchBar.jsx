// SearchBar.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase'; // Asegúrate de importar la instancia de Firebase desde tu archivo
import { getDocs, collection, query, where } from 'firebase/firestore';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

 
  
const handleSearch = async () => {
  try {
    if (searchTerm.length > 0) {
      const productosRef = collection(db, 'items');
      const q = query(
        productosRef,
        where('titulo', '>=', searchTerm),
        where('titulo', '<=', searchTerm + '\uf8ff')
      );

      const querySnapshot = await getDocs(q);

      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(searchTerm)
      setSearchResults(items);
      console.log(searchResults)
    }
  } catch (error) {
    console.error('Error al buscar en Firebase:', error);
  }
};

  useEffect(() => {
    handleSearch(); // Llama a handleSearch cuando searchTerm cambie
  }, [searchTerm]);



  return (
    <div className="flex items-center justify-center space-x-2">
      <input
        className="bg-black text-white px-4 py-2 rounded-l w-64"
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2 rounded-r"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
}
export default SearchBar;
