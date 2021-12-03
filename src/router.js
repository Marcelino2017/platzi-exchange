
import Home from "@/views/Home"
import Error from "@/views/Error"
import About from "@/views/About"



  const routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/about",
      name: "about",
      component: About
    },

    {
      path: "/:catchAll(.*)",
      name: "error",
      component: Error
    },
  ]

export default routes

