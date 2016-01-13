var Octokat = require('octokat')
var octo = new Octokat({
  token: process.env.GITHUB_OGN_TOKEN
})
var Promise = require('bluebird')

module.exports = function removeNotifications (user) {
  return Promise.try(function () {
    return octo.notifications.fetch()
  }).each(function (repo) {
    var id = repo.id
    return Promise.try(function () {
      return octo.fromUrl(repo.subject.url).fetch()
    }).then(function (notification) {
      if (notification.user.login === user) {
        return octo.notifications.threads(id).update()
      }
    }).catch(function (err) {
      console.log(err)
    })
  }).catch(function (err) {
    console.log(err)
  })
}
