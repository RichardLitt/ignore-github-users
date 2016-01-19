var Octokat = require('octokat')
var octo = new Octokat({
  token: process.env.GITHUB_OGN_TOKEN
})
var Promise = require('bluebird')
var isArray = require('isarray')

module.exports = function removeNotifications (user) {
  if (typeof user !== 'string') {
    if (!isArray(user)) {
      throw new TypeError('Expected a string or an array')
    }
  } else {
    user = [user]
  }

  return Promise.try(function () {
    return octo.notifications.fetch()
  }).each(function (repo) {
    var id = repo.id
    return Promise.try(function () {
      return octo.fromUrl(repo.subject.url).fetch()
    }).then(function (notification) {
      if (user.indexOf(notification.user.login) > -1) {
        return octo.notifications.threads(id).update()
      }
    }).then(function () {
      // Should only happen once
      return `Ignored ${user}`
    }).catch(function (err) {
      console.log(err)
    })
  }).catch(function (err) {
    console.log(err)
  })
}
