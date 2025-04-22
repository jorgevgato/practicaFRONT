export const buildUnauthorizedSession = () => {
    return `
      <a href="./login.html">Login</a>
      <a href="./register.html">Registro</a>
    `;
  }
  
  export const buildAuthorizedSession = () => {
    return `
      <a href="./ad-creator.html">Crear anuncio</a>
      <button class="logout">Cerrar sesión</button>
    `;
  }