var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'request'
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// function getRepoContributors(repoOwner, repoName, cb) {
//   var options;
//   var url = request.get('https://api.github.com/repos/jquery/jquery/contributors')
//   .on('error', function (err) {
//     throw err;
//   })
//   .on('response', function (response) {
//     console.log('avatar URL: ', body.avatar_url)
//   })
//   .on('data', function (data) {


//   })
// }
