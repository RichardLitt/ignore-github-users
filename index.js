var Octokat = require('octokat')
var octo = new Octokat({
  token: process.env.IGNOREGITHUBNOTIFICATIONS
})
var Promise = require('bluebird')
var isArray = require('isarray')
var depaginate = require('depaginate')

module.exports = function removeNotifications (user) {
  if (typeof user !== 'string') {
    if (!isArray(user)) {
      throw new TypeError('Expected a string or an array')
    }
  } else {
    user = [user]
  }

  console.log('Hello')

  return Promise.try(() => octo.notifications.fetch()) // depaginate((opts) => octo.notifications.fetch(), {}))
  .each((repo) => {
    var id = repo.id
    return Promise.resolve(octo.fromUrl(repo.subject.url).fetch())
      .then((notification) => {
        if (user.indexOf(notification.user.login) > -1) {
          return octo.notifications.threads(id).update()
        }
      })
      // Should only happen once
      .then(() => `Ignored ${user}`)
  })
}
