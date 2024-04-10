export default function cardSuperHero(nombre, imagen, historia) {
  return `
    <div class="card w-25" style="width: 18rem;">
    <img src=${imagen} class="card-img-top" alt="...">
    <div class="card-body">
        <h1 class="card-title">${nombre}</h1>
      <p class="card-text">${historia}</p>
    </div>
  </div>
    `;
}
