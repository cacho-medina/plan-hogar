function Soporte() {
    return (
        <div className="content">
            <div className="bg-slate-500 py-10 md:rounded-tl-2xl">
                <h2 className="text-6xl font-bold text-white text-center">
                    Soporte
                </h2>
            </div>
            <div className="px-3 py-8 sm:px-5">
                <h2 className="text-xl font-semibold sm:text-2xl mb-8">
                    Para solicitar ayuda contactar mediante:
                </h2>
                <div className="flex flex-col items-stretch justify-center gap-2 p-4 max-w-[300px] mx-auto md:flex-row md:max-w-[800px] md:gap-4">
                    <a
                        target="_blank"
                        className="soporte-links bg-gray-500 hover:bg-green-500"
                        href="http://wa.me/+5493815773949"
                    >
                        <img
                            src="/utils/wp.svg"
                            alt="whatsapp link"
                            className="w-5"
                        />
                        <span className="font-semibold">Whatsapp</span>
                    </a>
                    <a
                        className="soporte-links bg-gray-500 hover:bg-red-500"
                        href="mailto:zanlorenzocacho10@gmail.com"
                    >
                        <img
                            src="/utils/mail.svg"
                            alt="email link"
                            className="w-5"
                        />
                        <span className="font-semibold">Correo</span>
                    </a>
                    <a
                        className="soporte-links bg-gray-500 hover:bg-blue-500"
                        href="tel:+3815773949"
                    >
                        <img
                            src="/utils/phone.svg"
                            alt="telefono link"
                            className="w-5"
                        />
                        <span className="font-semibold">Telefono</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Soporte;
