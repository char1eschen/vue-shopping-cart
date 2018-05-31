<template>
  <div>
    <h1 class="title">All Products</h1>
      <p>{{length}} products</p>
      <table class="table is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" track-by="id">
            <td>{{product.name}}</td>
            <td>{{product.description}}</td>
            <td>${{product.price}}</td>
            <td><button @click='addToCart(product)' class='button is-info'>Add to cart</button></td>
          </tr>
        </tbody>
        <div class="reference">
        <p>Reference:</p>
        <a href="https://vuejs.org/v2/guide/index.html">Official Guide of Vue.js</a>
        <a href="https://medium.com/@connorleech/build-a-shopping-cart-with-vue-2-and-vuex-5d58b93c513f">Tutorial</a>
        </div>
    </table>
  </div>
</template>

<style>
  .reference {
    margin-top: 20px;
    color: #363636;
  }

  .reference a {
    color: #00aced;
  }

  .reference a:hover {
    color: #363636;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts'
  }),
  methods: mapActions([
    'addToCart'
  ])
}
</script>

<style lang="scss">

</style>
