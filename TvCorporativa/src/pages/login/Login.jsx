import { useState } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import Botao from "../../components/botao/Botao"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { setUsuario } = "";

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem

        });

    }

    async function realizarAutenticacao(e) {
        e.preventDefalt();

        const usuario = {
            email: email,
            senha: senha
        }

        if (senha.trim() != "" || email.trim() != "") {

            try {
                const resposta = await api.post("Login", usuario)
                const token = resposta.data.token;

                if (token) {
                    // token ser decodificado 
                    const tokenDecodificado = userDecodeToken(token);
                    // armazenando:
                    secureLocalStorage.setItem("tokenLogin", JSON.stringify(tokenDecodificado));

                    setUsuario(tokenDecodificado);

                    if (tokenDecodificado.tipoUsuario === "Comum") {
                        navigate("")
                        console.log("Caiu dnv");
                        // ele vai encaminhar para a tela de cadastro
                    }
                }
            } catch (error) {
                console.log(error);
                alertar("error", "Email u senha invalidos")
            }
        } else {
            alertar("error", "Preencha os campos vazios!")
        }
    }

    return (
        <main className="main_login">
            <div className="banner"> </div>
            <section className="section_login">
                {/* {<img src={} alt="LogoVortek"/> } */}

                <form action="" className="form_login" onSubmit={realizarAutenticacao}>
                    <div className="campo_login">
                        <div className="campo_input">
                            <label htmlFor="email"></label>
                            <input type="email"
                                name="email"
                                placeholder="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha"></label>
                            <input type="password"
                                name="senha"
                                placeholder="password"
                                value={senha}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <p className="login-forgot-password"> Esqueceu a Senha </p>
                    </div>
                    <Botao nomeDoBotao="Login" />
                </form>
            </section>
        </main>
    );
};

export default Login;


