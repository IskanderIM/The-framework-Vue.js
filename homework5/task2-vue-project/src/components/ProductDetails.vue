<template>
  <div>
    <ul>
      <li v-for="item in products" :key="item.id">
        <h2>{{ item.name }}</h2>
        <h2><span>{{ item.selected }}</span>{{ item.price }}</h2>
        <input type="checkbox" name="available" id="available" v-model="item.available">
        <p v-if="item.available === true">Available</p>
        <p v-else>Out of stock</p>
          <span>Пересчитать цену</span>
        <select @change="formattedPrice(item.id, item)" v-model="item.selected">
          <option selected>₽</option>
          <option>$</option>
          <option>€</option>
        </select>
        <p>{{ item.result }}</p>
        <p>{{ item.selected }}</p>
        <p>{{ formattedPrice }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 300,
          available: true,
          selected: '',
          result: 0
        },
        {
          id: 2,
          name: 'Product 2',
          price: 600,
          available: false,
          selected: '',
          result: 0
        },
        {
          id: 3,
          name: 'Product 3',
          price: 200,
          available: true,
          selected: '',
          result: 0
        }
      ]
    }
  },

  mounted () {
  },

  methods: {
    formattedPrice (item) {
      // console.log(id)
      // console.log(item)
      // console.log(item.price)
      // console.log(item.selected)
      // item.result = 0
      this.$nextTick(function () {
        if (item.id || item.selected === '₽') {
          // item.result = 0
          item.result = Number(item.price)
          // console.log(item.result)
        } else if (item.id || item.selected === '$') {
          // item.result = 0
          item.result = Number(item.price) * Number(87.51)
          // console.log(item.result)
        } else if (item.id || item.selected === '€') {
          // item.result = 0
          item.result = Number(item.price) * Number(95.10)
        }
      })
    }
  }

  // computed: {
  //   priceCount () {
  //     return this.formattedPrice(this.item)
  //   }
  // }
}
</script>
