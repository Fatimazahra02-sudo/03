function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
<div style={{ border: "1px solid #d0d5dd", borderRadius: 8, padding: 16, marginBottom: 12, background: "#fff", textAlign: "left" }}>
  <h3 style={{ margin: 0, color: "#1f2a44" }}>{titre}</h3>
  <p style={{ margin: "4px 0", color: "#667085" }}>{auteur}</p>
  <p style={{ margin: "8px 0" }}>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
  <button onClick={onClickEmprunt} style={{ background: "#1f2a44", color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", cursor: "pointer" }}>
    {estDisponible ? "Emprunter" : "Rendre"}
  </button>
</div>
  );
}

export default BookCard;