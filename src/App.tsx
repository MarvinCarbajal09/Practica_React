import './App.css'
import Layout from './components/global/LayoutComponet';
import Footer from './components/global/FooterComponent';
import Card from './components/home/CardComponent';

function App() {

  return (
    //<> utilidad para etiquetas que no sea renderizar en el html
    //className en vez de usar class para usar propiedades de tailwinds
    //Declaración de componentes con Mayúsculas
    <>
      <Layout></Layout>
      <div>
        <Card></Card>
      </div>
   
      <Footer></Footer>
      
    </>
  )
}

export default App
