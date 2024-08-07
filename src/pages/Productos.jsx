function Productos() {
    return (
        <div className="content">
            <div className="bg-red-500 py-10 md:rounded-tl-2xl">
                <h2 className="text-6xl font-bold text-white text-center">
                    Productos
                </h2>
            </div>
            <div className="grow px-2 md:px-6">
                <div className="flex items-center justify-center border-b py-8 mb-10">
                    <button className="btn-blue text-2xl">
                        Agregar Producto
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Productos;
