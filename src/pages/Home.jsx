import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="content">
            <div className="flex items-center justify-center flex-wrap gap-4 px-2 sm:px-4 md:px-8 py-6 md:py-10 md:gap-8">
                <Link
                    to="/clientes"
                    className="card bg-blue-500 transition-colors hover:bg-blue-400"
                >
                    <div>
                        <h2 className="info">Clientes</h2>
                    </div>
                </Link>
                <Link
                    to="/productos"
                    className="card bg-red-500 transition-colors hover:bg-red-400"
                >
                    <div>
                        <h2 className="info">Productos</h2>
                    </div>
                </Link>
                <Link
                    to="/planes"
                    className="card bg-cyan-500 transition-colors hover:bg-cyan-400"
                >
                    <div>
                        <h2 className="info">Planes</h2>
                    </div>
                </Link>
                <Link
                    to="/"
                    className="card bg-yellow-500 transition-colors hover:bg-yellow-400"
                >
                    <div>
                        <h2 className="info">Info</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
