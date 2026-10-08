<template>
  <!-- hero -->

  <div class="px-4 py-5 my-5 text-center">
    <div
      id="logoCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div class="carousel-inner">
        <!-- รูปแรก -->
        <div class="carousel-item active">
          <img
            src="../assets/image/logo arc.png"
            class="d-block mx-auto mb-4"
            alt="Logo ARC"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <!-- รูปที่สอง -->
        <div class="carousel-item">
          <img
            src="../assets/image/logo patagonia.png"
            class="d-block mx-auto mb-4"
            alt="Logo 2"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <!-- รูปที่สาม -->
        <div class="carousel-item">
          <img
            src="../assets/image/logo tnf.png"
            class="d-block mx-auto mb-4"
            alt="Logo 3"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <div class="carousel-item">
          <img
            src="../assets/image/logo fj.png"
            class="d-block mx-auto mb-4"
            alt="Logo 3"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <div class="carousel-item">
          <img
            src="../assets/image/logo rab.png"
            class="d-block mx-auto mb-4"
            alt="Logo 3"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <div class="carousel-item">
          <img
            src="../assets/image/logo columbia.png"
            class="d-block mx-auto mb-4"
            alt="Logo 3"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <div class="carousel-item">
          <img
            src="../assets/image/logo mammut.png"
            class="d-block mx-auto mb-4"
            alt="Logo 3"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <div class="carousel-item">
          <img
            src="../assets/image/logo gramcci.png"
            class="d-block mx-auto mb-4"
            alt="Logo 3"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>

        <div class="carousel-item">
          <img
            src="../assets/image/logo jws.png"
            class="d-block mx-auto mb-4"
            alt="Logo 3"
            width="250"
            height="250"
            style="object-fit: contain"
          />
        </div>
      </div>
    </div>

    <h1 class="display-5 fw-bold text-body-emphasis">21Hiking Outfit</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        The plan is no plan <br />
        Outdoor & Hiking Wear for Adventurers
      </p>

      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
          Primary button
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">
          Secondary
        </button>
      </div>
    </div>
  </div>
  <!-- ========================= AUTO SLIDING BANNER ========================= -->
  <div class="container-fluid px-0">
    <div
      id="hikingBanner"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3500"
    >
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hikingBanner"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#hikingBanner"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#hikingBanner"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <!-- Carousel Items -->
      <div class="carousel-inner">
        <!-- Banner 1 -->
        <div class="carousel-item active">
          <img
            src="../assets/banner/banner arc.jpg"
            class="d-block w-100"
            alt="Hiking Adventure"
            style="height: 600px; object-fit: cover; filter: brightness(60%)"
          />
          
        </div>
        <!-- Banner 2 -->
        <div class="carousel-item">
          <img
            src="../assets/banner/banner Tnf.jpg"
            class="d-block w-100"
            alt="Mountain Adventure"
            style="height: 600px; object-fit: cover; filter: brightness(60%)"
          />
          <div
            class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100"
          >
           
          </div>
        </div>
        <!-- Banner 3 -->
        <div class="carousel-item">
          <img
            src="../assets/banner/arc.jpg"
            class="d-block w-100"
            alt="Outdoor Camping"
            style="height: 600px; object-fit: cover; filter: brightness(60%)"
          />
          <div
            class="carousel-caption d-flex flex-column justify-content-center align-items-center h-100"
          >
           
          </div>
        </div>
      </div>
      <!-- Previous Button -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#hikingBanner"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"> Previous </span>
      </button>
      <!-- Next Button -->
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#hikingBanner"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"> Next </span>
      </button>
    </div>
  </div>
  <!-- ========================= END AUTO SLIDING BANNER ========================= -->
  <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Hanging icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em" aria-hidden="true">
            <use xlink:href="#toggles2"></use>
          </svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <!-- 3 colum -->
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em" aria-hidden="true">
            <use xlink:href="#cpu-fill"></use>
          </svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em" aria-hidden="true">
            <use xlink:href="#tools"></use>
          </svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Featured title</h3>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
    </div>
  </div>
  <!-- 2 colum-->
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
          Vertically centered hero sign-up form
        </h1>
        <p class="col-lg-10 fs-4">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <hr class="my-4" />
          <small class="text-body-secondary"
            >By clicking Sign up, you agree to the terms of use.</small
          >
        </form>
      </div>
    </div>
  </div>
</template>
