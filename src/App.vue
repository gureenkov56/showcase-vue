<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Каталог</router-link>
        </li>
        <li>
          <router-link to="/add-good">Добавить товары</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>



<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600&display=swap");

body {
  margin: 0;
  background-color: #FAF9F7;

  #app {
    font-family: "Source Sans Pro", sans-serif;
    color: #3F3F3F;

    header {
      padding: 20px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      position: sticky;
      top: 0;
      z-index: 10;

      ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
          margin-right: 1rem;

          a {
            text-decoration: none;
            color: #3f3f3f;
          }

          .router-link-active {
            font-weight: bold;
          }
        }
      }
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  }
}
</style>
