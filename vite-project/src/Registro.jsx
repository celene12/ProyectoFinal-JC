import { useState } from 'react'
import './RegistroYInicio.css'

function Registro() {


  return (
    <>
      <div class="container">
        <div class="signin-signup">
            <form action="" class="sign-in-from">
                <h2 class="tittle">sign in</h2>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username"></input>
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password"></input>
                </div>
                <input type="submit" value="Login" class="btn"></input>
                <p class="social-text">Or sign in with social plataform</p>
                <div class="social-media">
                    <a href="#" class="social-icon">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </form>
            <form action="" class="sign-up-from">
                <h2 class="tittle">sign up</h2>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Username"></input>
                </div>
                <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Email"></input>
                </div>
                <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password"></input>
                </div>
                <input type="submit" value="Sign up" class="btn"></input>
                <p class="social-text">Or sign in with social plataform</p>
                <div class="social-media">
                    <a href="#" class="social-icon">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </form>

        </div>
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>Member of Brand?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias iure dolore atque laborum tenetur quae magni sed sapiente commodi.</p>
                    <button class="btn" id="sign-in-btn">Sign in</button>
                </div>
                <img src="signin.svg" alt="" class="image"></img>
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>New of Brand?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi tempora ex, magni perferendis soluta cupiditate quidem accusantium optio aliquid facilis?</p>
                    <button class="btn" id="sign-up-btn">Sign up</button>
                </div>
                <img src="signup.svg" alt="" class="image"></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Registro
