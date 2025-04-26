export const buildUnauthorizedSession = () => {

    const currentPath = location.pathname

    const showLoginButton = currentPath !== "/login.html"
    const showRegisterButton = currentPath !== "/register.html"

    return `
      <div class="nav-logo">
        <a href="/"><img src="./assets/PopLogo.png" alt="Logo"></a>
      </div>

      <div class="nav-buttons">
        ${showLoginButton ? '<a href="./login.html">Login</a>' : ""}
        ${showRegisterButton ? '<a href="./register.html">Registro</a>' : ""}
      </div>
  `
  }
  
  export const buildAuthorizedSession = () => {

    const currentPath = location.pathname

    const showAdCreatorButton = currentPath !== "/ad-creator.html"

    return `
      <div class="nav-logo">
        <a href="/"><img src="./assets/PopLogo.png" alt="Logo"></a>
      </div>

      <div class="nav-buttons">
        ${showAdCreatorButton ? '<a href="./ad-creator.html">Crear anuncio</a>' : ""}
        <button class="logout">Cerrar sesión</button>
      </div>
  `
  }