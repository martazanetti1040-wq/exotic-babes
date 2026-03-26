* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    background: #000;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background: linear-gradient(90deg, #0a0f2c, #000);
    position: fixed;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(255, 204, 0, 0.2);
    backdrop-filter: blur(5px);
    flex-wrap: wrap;
    gap: 10px;
}

.logo {
    font-size: 1.8em;
    color: #ff4444;
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

nav {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
}

nav a {
    color: #ddd;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
    font-size: 0.9em;
}

nav a:hover {
    color: #ffcc00;
}

#hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    margin-top: 60px;
    overflow: hidden;
    padding: 20px;
}

.bg-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    transition: background-image 1s ease-in-out;
}

.bg-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    z-index: -1;
}

.content {
    z-index: 2;
    max-width: 600px;
    padding: 20px;
    width: 100%;
    animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h1 {
    font-size: 2.5em;
    color: #ff4444;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    line-height: 1.2;
}

p {
    font-size: 1.1em;
    margin-bottom: 30px;
    color: #ddd;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

.btn {
    padding: 15px 40px;
    background: #0a0f2c;
    color: white;
    border: 2px solid #ffcc00;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3);
    width: 100%;
    max-width: 300px;
}

.btn:hover {
    background: #ffcc00;
    color: #0a0f2c;
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(255, 204, 0, 0.5);
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.modal-content {
    background: linear-gradient(135deg, #0a0f2c 0%, #1a1a1a 100%);
    padding: 40px;
    border-radius: 15px;
    width: 100%;
    max-width: 380px;
    text-align: center;
    box-shadow: 0 0 30px rgba(255, 204, 0, 0.6);
    border: 2px solid #ffcc00;
    animation: popIn 0.3s ease;
}

@keyframes popIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.modal-content h2 {
    color: #ffcc00;
    margin-bottom: 25px;
    font-size: 1.8em;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 1;
}

.close:hover {
    color: #ffcc00;
}

/* Social Buttons */
.social-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
}

.social-btn {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    letter-spacing: 1px;
}

/* TikTok — Red + Black */
.social-btn.tiktok {
    background: linear-gradient(90deg, #000, #ff0050);
    border: 1px solid #ff0050;
}

.social-btn.tiktok:hover {
    background: linear-gradient(90deg, #ff0050, #000);
    transform: scale(1.05);
}

/* X — Black + White */
.social-btn.x {
    background: #000;
    border: 1px solid #fff;
    color: white;
}

.social-btn.x:hover {
    background: #222;
    transform: scale(1.05);
}

/* Facebook — Purple + Blue */
.social-btn.facebook {
    background: linear-gradient(90deg, #3b5998, #6a0dad);
    border: 1px solid #6a0dad;
}

.social-btn.facebook:hover {
    background: linear-gradient(90deg, #6a0dad, #3b5998);
    transform: scale(1.05);
}

/* Login Form */
#loginForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
}

.input-group {
    width: 100%;
}

.input-group input {
    width: 100%;
    padding: 14px;
    border: 1px solid rgba(255, 204, 0, 0.3);
    border-radius: 8px;
    font-size: 1em;
    background: rgba(255, 255, 255, 0.08);
    color: white;
    transition: all 0.3s ease;
    outline: none;
}

.input-group input:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: #ffcc00;
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.3);
}

.input-group input::placeholder {
    color: #aaa;
}

.error-msg {
    color: #ff4444;
    font-size: 0.85em;
    min-height: 20px;
    text-align: left;
}

.login-btn {
    width: 100%;
    padding: 14px;
    background: #ffcc00;
    color: #0a0f2c;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3);
    margin-top: 5px;
}

.login-btn:hover {
    background: #ffdd44;
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255, 204, 0, 0.5);
}

.signup-text {
    font-size: 0.8em;
    color: #aaa;
    margin-top: 5px;
    text-align: center;
    cursor: pointer;
    transition: color 0.3s ease;
}

.signup-text:hover {
    color: #ffcc00;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .logo {
        font-size: 1.4em;
    }

    h1 {
        font-size: 1.8em;
    }

    p {
        font-size: 1em;
    }

    .btn {
        padding: 12px 20px;
        font-size: 1em;
    }

    .modal-content {
        padding: 25px;
    }

    .social-btn {
        padding: 12px;
        font-size: 0.9em;
    }

    .input-group input {
        padding: 12px;
        font-size: 0.9em;
    }

    .login-btn {
        padding: 12px;
        font-size: 1em;
    }
}
