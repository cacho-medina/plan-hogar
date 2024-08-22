import { useForm } from "react-hook-form";
import { login } from "../helpers/auth/auth";
import { useState } from "react";
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
    const [ver, setVer] = useState(false);
    const onSubmit = async (data) => {
        const res = await login(data);
        if (!res.ok) {
            Swal.fire({
                icon: "error",
                title: "Credenciales incorrectas",
            });
        } else {
            const user = await res.json();
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
                        <div className="relative">
                            <input
                                type={ver ? "text" : "password"}
                                placeholder="Ingresa tu contraseña..."
                                className="input-login"
                                {...register("password", {
                                    required: "ingrese su contraseña",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Ingrese como minimo 8 caracteres",
                                    },
                                    maxLength: {
                                        value: 16,
                                        message:
                                            "ingrese un maximo de 16 caracteres",
                                    },
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,16}$/,
                                        message:
                                            "la contraseña debe tener al menos una letra minuscula, una letra mayuscula, un numero y un caracter especial",
                                    },
                                })}
                            />
                            <div className="absolute top-3 right-2 transition hover:scale-105">
                                <label className="cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="verPassword"
                                        hidden
                                        onChange={() => setVer(!ver)}
                                    />
                                    <span>
                                        <img
                                            src="/view.svg"
                                            alt="seleccione para ver contraseña"
                                            className="w-10"
                                        />
                                    </span>
                                </label>
                            </div>
                        </div>
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
