import React from 'react'

const header = () => {
    return (
<header id="header" class="header fixed-top">
            <nav id="scrollspy" class="navbar navbar-expand-lg header-nav">
                <div class="container">
                    <a class="navbar-brand  mr-lg-3 mr-xl-5 base-color" href="index-02-colorfull.html.htm">westin</a>
                    <button class="navbar-toggler collapsed " type="button" data-toggle="collapse" data-target="#toggle-menu" aria-controls="toggle-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="lni lni-menu"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="toggle-menu">
                        <ul class="navbar-nav nav-pills ml-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#hero">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#testimonial">Client</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header
