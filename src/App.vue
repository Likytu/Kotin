<template>
  <div>
    <router-view />
  </div>
</template>
<script>
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  font-family: 'Gilroy', 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Мобильный адаптив */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }

  body {
    overflow-x: hidden;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
}

/* Улучшение сенсорных элементов на мобильных */
@media (max-width: 768px) {
  button {
    min-height: 44px;
  }

  input, textarea, select {
    min-height: 44px;
    font-size: 16px;
  }
}
</style>