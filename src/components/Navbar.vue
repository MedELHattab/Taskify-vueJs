<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">Taskify</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars" style="color: #6298f3;"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin: 0 auto;">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="search.html">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex nav_btn px-2" role="search" >
                        <a href="sign.html" class="btn btn-primary">Connect</a>
                    </form>
                    <form class="d-flex nav_btn px-2" role="search">
                        <a href="sign.html" class="btn btn-success">Register</a>
                    </form>
                    <form class="d-flex nav_btn px-2" role="search">
                        <a href="sign.html" class="btn btn-danger">Log out</a>
                    </form>
                    <i id="dark-mode-toggle" class="fas fa-moon ps-3 "></i>
                </div>
            </div>
        </nav>
    </header>
</template>