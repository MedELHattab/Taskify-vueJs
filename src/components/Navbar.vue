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
                    
                        <router-link to="/login" class="btn btn-outline-secondary btn-lg px-4">Sign in</router-link>
                    
                    <form class="d-flex nav_btn px-2">
                        <router-link to="/register" class="btn btn-success">register</router-link>
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

<style scoped>
body::-webkit-scrollbar {
    width: 9px;
  }
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
   
  body::-webkit-scrollbar-thumb {
      background-color: #3498DB;
      outline: 1px solid #3498DB;
      border-radius: 9rem;
      
  }
  body::-webkit-scrollbar-thumb:hover {
      background-color: #92caf0;
  }
  .nav-link{
    font-family: Lato;
    color: #3498DB;
  }
  .nav_btn a{
      padding: 0.375rem 2.75rem;border-radius: 1.25rem;
      background-color: #3498DB;
  }
  .navbar-toggler:focus{
      box-shadow: none;
  }
</style>