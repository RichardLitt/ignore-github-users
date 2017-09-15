const Octokat = require('octokat')
const Promise = require('bluebird')
const shimUser = require('stringorarraytoarray')
const lib = require('./lib/index.js')

module.exports = function (user, opts) {
  user = shimUser(user)
  opts = opts || {}
  var issueCounter = 0
  var octo = new Octokat({
    token: opts.token || process.env.GITHUB_TOKEN,
    rootURL: opts.enterprise
  })

  return Promise
    .resolve(octo.notifications.fetch())
    .catch(() => {
      throw new Error('Unable to get notifications.')
    })
    .then((res) => res.items)
    .each((notif) => {
      // Get the issue details
      return lib.getNotification(octo, notif.subject.url)
        .then((notification) => {
          // This doesn't work as expected. This just checks if the user is in there, at all. Is that the goal?
          // It _should_ check wether or not the user is mentionedin the new notification.
          if (user.indexOf(notification.user.login) > -1) {
            issueCounter += 1
            return octo.notifications.threads(notif.id).update()
          }
        })
        .catch((err) => {
          console.log(err)
          throw new Error('Unable to update notification.')
        })
    })
    .then(() => {
      return (issueCounter !== 0) ? `Ignored ${issueCounter} issues with ${user}.` : null
    })
    .catch((err) => {
      console.log(err)
      throw new Error('Unable to ignore notifications.')
    })
}
