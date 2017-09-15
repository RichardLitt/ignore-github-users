function getNotification (octo, url) {
  return Promise.resolve()
    .then(() => {
      return octo.fromUrl(url).fetch()
    })
    .catch((err) => {
      if (err) {
        throw err
      }
      throw new Error('Unable to get notification from URL')
    })
}

module.exports = {
  getNotification
}
