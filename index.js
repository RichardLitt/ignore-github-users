const Octokat = require('octokat')
const Promise = require('bluebird')
const isArray = require('isarray')

module.exports = function (user, opts) {
  opts = opts || {}

  if (typeof user !== 'string') {
    if (!isArray(user)) {
      throw new TypeError('Expected a string or an array')
    }
  } else {
    user = [user]
  }

  var octo = new Octokat({
    token: opts.token || process.env.GITHUB_TOKEN,
    rootURL: opts.enterprise
  })

  var issueCounter = 0

  return Promise.resolve(octo.notifications.fetch())
    .then((res) => res.items)
    .each((notif) => {
      // Grab the ID of the notification
      var id = notif.id
      // Get the issue details
      return Promise.resolve()
        .then(() => octo.fromUrl(notif.subject.url).fetch())
        .then((notification) => {
          // This doesn't work as expected. This just checks if the user is in there, at all. Is that the goal?
          // It _should_ check whether or not the user is mentionedin the new notification.
          if (user.indexOf(notification.user.login) > -1) {
            issueCounter += 1
            return octo.notifications.threads(id).update()
          }
        })
        .catch((err) => console.log(err))
    })
    .then(() => {
      return (issueCounter !== 0) ? `Ignored ${issueCounter} issues with ${user}.` : null
    })
    .catch((err) => console.log(err))
}
