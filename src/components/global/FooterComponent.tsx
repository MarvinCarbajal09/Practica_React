function Footer() {
    return (
        <>
            <footer className="mt-20">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                            <div className="text-white">
                                <h2 className="font-semibold">Dirección</h2>
                                <div className="flex mt-2 w-full">
                                    <img src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506425/SeedCode/icons/k5wxnjuezdj3r0mkkwav.png" alt="" className="w-6 h-6 max-h-6" />
                                    <p className=" whitespace-pre-line ml-3">Av. Santa Lucia, Sonzacate, Sonsonate, El Salvador</p>
                                </div>
                            </div>
                            <div className="text-white">
                                <h2 className="font-semibold">Contacto</h2>
                                <div className="flex mt-2">
                                    <div>
                                        <img src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506425/SeedCode/icons/ev2epplxgv0bnz9zdko2.png" alt="" className="w-6 h-6 max-h-6" />
                                    </div>
                                    <p className="ml-3">seedcodesv@gmail.com</p>
                                </div>
                                <div className="flex mt-2">
                                    <img src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506424/SeedCode/icons/d43ndnlnfuaof8paul0g.png" alt="" className="w-6 h-6 max-h-6" />
                                    <p className="ml-3">(503) 7392-1094</p>
                                </div>
                            </div>
                            <div className="text-white">
                                <h2 className="font-semibold">Redes sociales</h2>
                                <div className="flex mt-2">
                                    <img src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506425/SeedCode/icons/k5wxnjuezdj3r0mkkwav.png" alt="" className="w-6 h-6 max-h-6" />
                                    <a
                                        className="ml-3"
                                        title="LinkedIn-SeedCode"
                                        href="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506424/SeedCode/icons/lwltesvvxmfbiq0zy8ro.png"
                                    >LinkedIn</a>
                                </div>
                                <div className="flex mt-2">
                                    <img src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506425/SeedCode/icons/k5wxnjuezdj3r0mkkwav.png" alt="" className="w-6 h-6 max-h-6" />
                                    <a
                                        className="ml-3"
                                        title="Facebook-SeedCode"
                                        href="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506424/SeedCode/icons/dyibkysgup25uzniargw.png"
                                    >Facebook</a >
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-10 border-gray-200 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-500">
                            Copyright 2023 - Todos los derechos reservados por SeedCode.
                        </p>

                        <div className="flex -mx-2 sm:mt-0">
                            <img src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1691506280/SeedCode/img/hju1ez7gx0m6jftb58xn.png" alt="" className="w-6 h-6 max-h-6" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer