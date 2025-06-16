export default function SearchBar() {
  function buscar(e) {
    e.preventDefault();
    const query = document.getElementById('campoBusqueda').value;
    alert('Buscaste: ' + query);
  }

  return (
    <form className="buscador" onSubmit={buscar}>
      <input type="text" id="campoBusqueda" placeholder="Buscar producto..." />
      <button type="submit" className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
