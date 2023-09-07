function Card() {
    return (
        <div
            className="grid grid-cols-1 p-10 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-x-11 gap-y-11"
        >
            <div
                className="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
            >
                <div className="p-6">
                    <img className="w-20 mx-auto" src="/src/assets/img/piton.png"/>
                    <h2 className="mt-3 text-lg font-semibold text-center">E-commerce</h2>
                    <p
                        className="grid mt-3 text-base text-center place-content-center place-items-center"
                    >
                        Proporciona herramientas de pago seguras, administración de
                        inventario y seguimiento de pedidos para una experiencia de compra
                        satisfactoria.
                    </p>
                </div>
            </div>
            <div
                className="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
            >
                <div className="p-6">
                <img className="w-20 mx-auto" src="/src/assets/img/mysql.png" alt="" />
                    <h2 className="mt-3 text-lg font-semibold text-center">Software</h2>
                    <p
                        className="grid mt-3 text-base text-center place-content-center place-items-center"
                    >
                        Atrae nuevos clientes con tecnología de vanguardia para impulsar tu
                        negocio hacia el éxito.
                    </p>
                </div>
            </div>

            <div
                className="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
            >
                <div className="p-6">
                <img className="w-20 mx-auto" src="/src/assets/img/programacion.png" alt="" />
                    <h2 className="mt-3 text-lg font-semibold text-center">Redes Sociales</h2>
                    <p
                        className="grid mt-3 text-base text-center place-content-center place-items-center"
                    >
                        Descubre el poder de nuestras estrategias innovadoras para destacar
                        en el mercado.
                    </p>
                </div>
            </div>

            <div
                className="max-w-xs mx-auto mt-6 overflow-hidden text-black bg-white shadow-xl rounded-2xl"
            >
                <div className="p-6">
                <img className="w-20 mx-auto" src="/src/assets/img/ts.png" alt="" />
                    <h2 className="mt-3 text-lg font-semibold text-center">Sitios Web</h2>
                    <p
                        className="grid mt-3 text-base text-center place-content-center place-items-center"
                    >
                        Confía en nuestra experiencia para ofrecerte resultados
                        excepcionales y una experiencia del usuario inigualable.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card