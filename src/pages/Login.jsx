function Login() {
    return (
        <div className="h-full flex">
            <div className="hidden md:flex md:w-1/2 max-h-screen ">
                <img
                    src="/background.png"
                    alt=""
                    className="w-full h-auto object-cover overflow-hidden"
                />
            </div>
            <div className="w-full md:w-1/2 pt-10 md:py-10 lg:py-20 px-2">
                <div>
                    <h2 className="text-center font-semibold text-3xl md:text-4xl lg:text-6xl text-gris-oscuro">
                        Plan Hogar Login
                    </h2>
                </div>
                <form className="my-10 max-w-96 mx-auto flex flex-col justify-center gap-8">
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario..."
                        className="input-login"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa tu contraseña..."
                        className="input-login"
                    />
                    <button className="btn-red">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
