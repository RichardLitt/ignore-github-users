var Octokat = require('octokat')
var octo = new Octokat({
  token: process.env.GITHUB_OGN_TOKEN
})
var Promise = require('bluebird')

module.exports = function openNotifications (amount) {
  return Promise.resolve().then(function () {
    return octo.notifications.fetch()
  }).map(function (repo) {
    // Get subject.url || https://developer.github.com/v3/activity/notifications/#list-your-notifications
    // || https://api.github.com/repos/octokit/octokit.rb/issues/123
    // Get json
    // If user.long === offending_user || https://api.github.com/repos/ipfs/webui/pulls/193
    // Mark as read, PATCH /notifications/threads/:id
  }).then(function (notifications) {
    console.log('notifications', notifications)
    // console.log('Now opening %d notifications from %s/%s...', amount, organization, repository)
  }).catch(function (err) {
    console.log(err)
  })
}
