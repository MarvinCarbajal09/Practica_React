function Layout(){
    return(
        <>
      <header className="bg-white bg-opacity-5 text-black shadow-lg hidden md:block">
        <div className="container mx-auto flex items-center h-24">
          <a href="" className="flex items-center justify-center">
            <img className="h-16" src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506276/SeedCode/img/fjgq2fhsgyjczcvw30po.png" alt="" />
            <span className="ml-4 uppercase font-black">SeedCode</span>
          </a>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active">
                <a href="">
                  <span>Inicio</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Proyectos</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Servicios</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Contacto</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
          <button className="border border-white rounded-full font-bold px-8 py-2">Contact me</button>
        </div>
      </header>
        </>
    )
}

export default Layout