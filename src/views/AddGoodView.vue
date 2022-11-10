<template>
  <div>
    <page-title>Добавить товар</page-title>
    <div class="add-goods">
      <aside>
        <form>
          <label for="name">Наименование товара<span class="required">*</span></label>
          <input v-model="name"
                 type="text"
                 id="name"
                 placeholder="Введите наименование товара"
          >

          <label for="name">Описание товара</label>
          <textarea v-model="description"
                    rows="4"
                    id="description"
                    placeholder="Введите описание товара"
          ></textarea>

          <label for="name">Ссылка на изображение товара<span class="required">*</span></label>
          <input v-model="linkToImg"
                 type="text"
                 id="linkToImg"
                 placeholder="Введите ссылку товара"
          >

          <label for="name">Цена товара<span class="required">*</span></label>
          <input v-model="price"
                 type="text"
                 id="price"
                 placeholder="Введите цены"
          >

          <button :class="{ 'active' : name && linkToImg && price }">Добавить товар</button>
        </form>
      </aside>
      <div class="add-goods__showcase">
        <show-case showRmBtn="1"/>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import ShowCase from "@/components/ShowCase";

export default {
  components: {PageTitle, ShowCase},
  data: () => ({
    name: '',
    description: '',
    linkToImg: '',
    price: ''
  })
}
</script>

<style lang="scss" scoped>
.add-goods {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  aside {
    flex: 1;
    min-width: 300px;

    form {
      margin-top: 1rem;
      padding: 20px;
      background-color: #fff;

      border-radius: 4px;

      position: sticky;
      top: 80px;

      label {
        font-size: .9rem;

        .required {
          color: red;
        }
      }

      textarea {
        resize: none;
        font-family: inherit;
      }

      input,
      textarea {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border: none;
        border-radius: 4px;
        display: block;
        padding: 10px 20px;
        outline: none;
        margin: 10px 0 20px 0;
        width: 100%;
        box-sizing: border-box;
      }

      button {
        border: none;
        border-radius: 8px;
        height: 2rem;
        color: #B4B4B4;
        width: 100%;
        cursor: pointer;
        transition: background-color .3s;

        &.active {
          background-color: #7BAE73;
          color: #fff;
        }

      }
    }
  }

  &__showcase {
    flex: 3;
  }
}
</style>
