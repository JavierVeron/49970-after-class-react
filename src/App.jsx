import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <ItemListContainer titulo={"🚨 Atención 🚨"} mensaje={"❤️ Estamos actualizando el Sitio Web. Regresamos en unos minutos. ❤️"} />
      <Banner />
      <Footer />
    </>
  )
}

export default App
