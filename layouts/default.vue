<template>
  <div class="page-wrapper">
    <the-main-header />
    <the-mobile-header />
    <main class="page-content">
      <div class="container">
        <slot />
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: "stylesheet", href: "/css/dependencies.css" },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    { src: "/js/dependencies/bootstrap-slider.min.js", body: true },
    { src: "/js/dependencies/bootstrap.bundle.min.js", body: true },
    { src: "/js/dependencies/fancybox.umd.js", body: true },
    { src: "/js/dependencies/fancybox.umd.js", body: true },
    { src: "/js/dependencies/jquery-3.6.0.min.js", body: true },
    { src: "/js/dependencies/jquery.countdown.min.js", body: true },
    { src: "/js/dependencies/jquery.simple.timer.min.js", body: true },
    { src: "/js/dependencies/nouislider.min.js", body: true },
    { src: "/js/dependencies/select2.min.js", body: true },
    { src: "/js/dependencies/simplebar.min.js", body: true },
    { src: "/js/dependencies/swiper-bundle.min.js", body: true },
    { src: "/js/dependencies/wNumb.js", body: true },
    { src: "/js/dependencies/zoomsl.min.js", body: true },
    { src: "/js/custom.js", body: true },
    { src: "/js/theme.js", body: true },
  ],
});
</script>

<style lang="scss" scoped></style>
