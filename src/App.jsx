import { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", estDisponible: true },
    { id: 2, titre: "L'Étranger", auteur: "Albert Camus", estDisponible: true },
    { id: 3, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: false },
    { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
  ]);
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");

  const onClickEmprunt = (bookId) => {
    setBooks(books.map((b) =>
      b.id === bookId ? { ...b, estDisponible: !b.estDisponible } : b
    ));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!titre.trim() || !auteur.trim()) return;
    setBooks([...books, { id: Date.now(), titre, auteur, estDisponible: true }]);
    setTitre("");
    setAuteur("");
  };

  const champ = {padding : 8, border: "1px solid #d0d5dd", borderRadius: 6, flex : 1}
  return (
    <div style={{ maxWidth : 560, margin : "0 auto", padding : 24}}>
      <h1 style={{ color: "#1f2a44", fontSize : 24}}>
        {books.filter((b) => b.estDisponible).length} livre(s) disponible(s)</h1>

      {books.map((b) => (
        <BookCard
          key={b.id}
          titre={b.titre}
          auteur={b.auteur}
          estDisponible={b.estDisponible}
          onClickEmprunt={() => onClickEmprunt(b.id)}
        />
      ))}

      <form onSubmit={onSubmit} style={{ display : "flex", gap : 8}}>
        <input style={champ} value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre" />
        <input style={champ} value={auteur} onChange={(e) => setAuteur(e.target.value)} placeholder="Auteur" />
        <button type="submit" style={{background: "#0f766e", color:"#fff", border: "none", borderRadius: 6, padding : "8px 16px", cursor: "pointer"}}>
          Ajouter</button>
      </form>
    </div>
  );
}

export default App;

