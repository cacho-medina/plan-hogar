import { useForm } from "react-hook-form";
import { login } from "../helpers/auth/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login({ setUserLogged }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const res = await login(data);
        const user = await res.json();
        console.log(user);
        if (!res.ok) {
            Swal.fire({
                icon: "error",
                title: "Credenciales incorrectas",
            });
        } else {
            sessionStorage.setItem(
                "usuario",
                JSON.stringify({
                    email: user.email,
                    username: user.username,
                    id: user.id,
                    isAdmin: user.isAdmin,
                    token: user.token,
                })
            );
            setUserLogged(user);
            Swal.fire({
                icon: "success",
                title: "Bienvenido",
                text: `Ingresaste correctamente`,
            });
            navigate("/");
        }
        reset();
    };

    return (
        <div className="h-full flex bg-white">
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
                        Iniciar Sesión
                    </h2>
                </div>
                <form
                    className="my-10 max-w-96 mx-auto flex flex-col justify-center gap-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Ingresa tu nombre de usuario..."
                            className="input-login"
                            {...register("username", {
                                required: "ingrese su nombre de usuario",
                                min: {
                                    value: 4,
                                    message:
                                        "Ingrese un nombre de usuario válido",
                                },
                            })}
                        />
                        {errors.username && (
                            <p className="text-red-500 font-semibold">
                                {errors.username.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña..."
                            className="input-login"
                            {...register("password", {
                                required: "ingrese su contraseña",
                                minLength: {
                                    value: 8,
                                    message: "Ingrese como minimo 8 caracteres",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 font-semibold">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button className="btn-red">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
