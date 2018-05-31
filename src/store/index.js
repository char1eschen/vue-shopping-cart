import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  added: [],
  all: [
    {
      id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
      name: 'ISC Brisbane Broncos 2018 Home Jersey',
      description: 'ISC Brisbane Broncos Adults 2018 Home Jersey',
      price: 94.95
    },
    {
      id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
      name: 'Skins A400 Compression Long Tights',
      description: 'Our SKINS A400 Men’s Long Tights are constructed using five ' +
        'different technical fabrics and 24 individual panels.',
      price: 199.95
    }
  ]
}

// getters
const getters = {
	allProducts: state => state.all, // would need action/mutation if data fetched async
	getNumberOfProducts: state => (state.all) ? state.all.length : 0,
	cartProducts: state => {
		return state.added.map(({ id, quantity }) => {
			const product = state.all.find(p => p.id === id)

			return {
				name: product.name,
				price: product.price,
				quantity
			}
		})
	}
}

// actions
const actions = {
	addToCart({ commit }, product){
		commit(types.ADD_TO_CART, {
			id: product.id
		})
	}
}

// mutations
const mutations = {

	[types.ADD_TO_CART] (state, { id }) {
	    const record = state.added.find(p => p.id === id)

	    if (!record) {
	      state.added.push({
	        id,
	        quantity: 1
	      })
	    } else {
	      record.quantity++
	    }
	  }
}

// one store for entire application
export default new Vuex.Store({
	state,
	strict: debug,
	getters,
	actions,
	mutations
})
