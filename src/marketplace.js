import urls from './urls'
import decorateRequest from './utils/decorate-request'

export default decorateRequest({
  getSections: req => (appId, marketplaceName) => {
    return req.get(`${urls.marketplace(appId, marketplaceName)}/sections`)
  },

  getProducts: req => (appId, marketplaceName, categoryId) => {
    return req.get(`${urls.marketplace(appId, marketplaceName)}/categories/${categoryId}/products`)
  },

  getProduct: req => (appId, marketplaceName, productId) => {
    return req.get(`${urls.marketplace(appId, marketplaceName)}/products/${productId}`)
  },

  getPurchases: req => appId => {
    return req.get(`${urls.billing(appId)}/marketplace/purchases`)
  },

  allocateProduct: req => (appId, productId, options) => {
    return req.post(`${urls.billing(appId)}/marketplace/purchases/${productId}`, options)
  },

  publish: req => (appId, marketplaceName, product) => {
    return req.post(`${urls.marketplace(appId, marketplaceName)}/product`, product)
  },
})
