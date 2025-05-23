import { buildAuthorizedSession, buildUnauthorizedSession } from "./sessionView.js";

export const sessionController = (container) => {

  const isUserLoggedIn = Boolean(localStorage.getItem("token"));

  if (isUserLoggedIn) {
    container.innerHTML = buildAuthorizedSession()

    const logoutButton = container.querySelector('.logout');
    
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token")
      
      setTimeout(() => {
        window.location = '/'
      }, 1000)
    //  sessionController(container)
    })
  } else {
    container.innerHTML = buildUnauthorizedSession()
  }
}