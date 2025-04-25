export const buildUnauthorizedSession = () => {
    return `
      <div class="nav-logo">
        <a href="/"><img src="./assets/PopLogo.png" alt="Logo"></a>
      </div>
      <div class="nav-links">
        <a href="./login.html">Login</a>
        <a href="./register.html">Registro</a>
      </div>
  `
  }
  
  export const buildAuthorizedSession = () => {
    return `
      <div class="nav-logo">
        <a href="/"><img src="./assets/PopLogo.png" alt="Logo"></a>
      </div>
      <div class="nav-links">
        <a href="./ad-creator.html">Crear anuncio</a>
        <button class="logout">Cerrar sesión</button>
      </div>
  `
  }