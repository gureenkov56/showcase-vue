<template>
  <div>
    <page-title>Добавить товар</page-title>
    <div class="add-goods">
      <aside>
        <form>
          <label for="name">Наименование товара<span class="required">*</span></label>
          <input v-model="name"
                 :class="{'error' : errorInRequired.includes('name')}"
                 type="text"
                 id="name"
                 placeholder="Введите наименование товара"
          >
          <div :class="{'show' : errorInRequired.includes('name')}"
               class="error-text">
            Поле является обязательным
          </div>

          <label for="name">Описание товара</label>
          <textarea v-model="description"
                    rows="4"
                    id="description"
                    placeholder="Введите описание товара"
          ></textarea>

          <label for="name">Ссылка на изображение товара<span class="required">*</span></label>
          <input v-model="linkToImg"
                 :class="{'error' : errorInRequired.includes('linkToImg')}"
                 type="text"
                 id="linkToImg"
                 placeholder="Введите ссылку товара"
          >
          <div :class="{'show' : errorInRequired.includes('linkToImg')}"
               class="error-text">
            Поле является обязательным
          </div>


          <label for="name">Цена товара<span class="required">*</span></label>
          <input v-model="price"
                 :class="{'error' : errorInRequired.includes('price')}"
                 type="number"
                 id="price"
                 placeholder="Введите цену"
          >
          <div :class="{'show' : errorInRequired.includes('price')}"
               class="error-text">
            Поле является обязательным
          </div>

          <button :class="{ 'active' : name && linkToImg && price }"
                  @click="validateAndSubmitForm"
                  type="button"
          >
            Добавить товар
          </button>
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
import store from "@/store";

export default {
  components: {PageTitle, ShowCase},
  data: () => ({
    name: '',
    description: '',
    linkToImg: '',
    price: '',
    errorInRequired: []
  }),
  methods: {
    validateAndSubmitForm() {
      if (!this.name) this.errorInRequired.push('name');
      if (!this.linkToImg) this.errorInRequired.push('linkToImg');
      if (!this.price) this.errorInRequired.push('price');

      if (this.errorInRequired.length === 0) {
        store.commit('ADD_NEW_GOOD', {
          id: Date.now(),
          title: this.name,
          description: this.description,
          images: [this.linkToImg],
          price: this.price
        })

        this.name = '';
        this.description = '';
        this.linkToImg = '';
        this.price = '';
      }
    },
    removeMeFromErrorList(item) {
      this.errorInRequired.splice(this.errorInRequired.indexOf(item), 1);
    }
  },
  watch: {
    name() {
      if (this.name && this.errorInRequired.includes('name')) this.removeMeFromErrorList('name');
    },
    linkToImg() {
      if (this.linkToImg && this.errorInRequired.includes('linkToImg')) this.removeMeFromErrorList('linkToImg');
    },
    price() {
      if (this.price && this.errorInRequired.includes('price')) this.removeMeFromErrorList('price');
    }
  }
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
        margin-top: 1rem;
        display: block;

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
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;

        &.error {
          border: 1px solid red;
        }
      }

      /* HIDE ARROWS ON input[type='number'] */
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }

      .error-text {
        color: red;
        font-size: .8rem;
        display: none;

        &.show {
          display: block;
        }
      }

      button {
        border: none;
        border-radius: 8px;
        height: 2rem;
        color: #B4B4B4;
        width: 100%;
        cursor: pointer;
        transition: background-color .3s;
        margin-top: 1rem;

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
