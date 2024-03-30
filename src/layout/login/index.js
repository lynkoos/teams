import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import QRCode from 'qrcode.react';
import qrLogo from './img/logo.png';
import './style/login.css';

const LoginIndex = ({ onLoginSuccess }) => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [acceptedTermsPrivacy, setAcceptedTermsPrivacy] = useState(false);
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const authenticatedUser = localStorage.getItem('authenticatedUser');
        if (authenticatedUser) {
            console.log('Usuario autenticado previamente:', JSON.parse(authenticatedUser));
        }
    }, []);

    const generateCustomQRCode = () => {
        const qrCodeOptions = {
            level: 'M',
            scale: 10,
            bgColor: 'transparent',
            fgColor: '#000000',
            includeMargin: false,
            renderAs: 'svg',
            imageSettings: {
                src: qrLogo,
                x: null,
                y: null,
                height: 40,
                width: 40,
                excavate: true,
            },
        };
        return qrCodeOptions;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!acceptedTermsPrivacy) {
            alert('Debes aceptar los términos y condiciones y la política de privacidad.');
            return;
        }
    
        try {
            const response = await fetch('https://660598892ca9478ea180b945.mockapi.io/api/v1/login');
            const data = await response.json();
    
            if (!Array.isArray(data)) {
                throw new Error('Los datos de la API no son válidos.');
            }
    
            const user = data.find(user => {
                const normalizedEmail = user.email.toLowerCase();
                const normalizedNumber = user.number.toLowerCase();
                const normalizedNikname = user.nikname.toLowerCase();
                const normalizedInput = emailOrUsername.toLowerCase();
                return (normalizedEmail === normalizedInput || normalizedNumber === normalizedInput || normalizedNikname === normalizedInput) && user.password === password;
            });
    
            if (user) {
                console.log('Usuario autenticado:', user);
                localStorage.setItem('authenticatedUser', JSON.stringify(user));
                onLoginSuccess();
            } else {
                setLoginError('El usuario o la contraseña son incorrectos.');
            }
        } catch (error) {
            console.error('Error al autenticar al usuario:', error);
            setLoginError('Se produjo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    };
    
    

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLoginWithGitHub = () => {
        console.log('Iniciando sesión con GitHub...');
    };

    const handleLoginWithGoogle = () => {
        console.log('Iniciando sesión con Google...');
    };

    return (
        <div className="login-container">
            <div className='login-container-sub'>
                <div className="left-container">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <input
                                placeholder='Correo/Usuario/Telefono'
                                type="text"
                                id="emailOrUsername"
                                value={emailOrUsername}
                                onChange={(e) => setEmailOrUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                placeholder='Contraseña'
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={acceptedTermsPrivacy}
                                    onChange={() => setAcceptedTermsPrivacy(!acceptedTermsPrivacy)}
                                    required
                                />
                                Acepto los términos y condiciones y la política de privacidad
                            </label>
                        </div>
                        <div className="button-group">
                            <button className="login-button" type="submit">Iniciar Sesión</button>
                            <button className="github-button" onClick={handleLoginWithGitHub}>
                                <FaGithub /> Iniciar Sesión con GitHub
                            </button>
                            <button className="google-button" onClick={handleLoginWithGoogle}>
                                <FaGoogle /> Iniciar Sesión con Google
                            </button>
                        </div>
                        {loginError && <div className="login-error">{loginError}</div>}
                    </form>
                </div>
                <div className="right-container">
                    <div className="qr-container">
                        <QRCode value="https://example.com" {...generateCustomQRCode()} />
                        <p>Escanea el código QR para iniciar sesión</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginIndex;