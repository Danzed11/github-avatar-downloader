var request = require('request');
var secret = require('./secret.js')
var fs = require('fs')
<<<<<<< HEAD
var argv1 = process.argv[2];
var argv2 = process.argv[3];
  if(!argv1) {
    console.log("No input received");
    process.exit();
  }
=======
>>>>>>> 345f94b42f8dfa5d48048f52f9f88e4337d4a0a5
console.log('Welcome to Github Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
   var options = {
     url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
     headers: {
       'User-Agent': 'request',
       'Authorization':secret.GITHUB_TOKEN
     }
   };

   request(options, function(err, res, body) {
       var repos = JSON.parse(body);
     console.log(repos)
     repos.forEach(function(repo){
       //   console.log(repo.avatar_url)
         downloadImageByURL(repo.avatar_url, "avatars/" + repo.login + ".jpg")
     });
     cb(err, body);
     });
   };

<<<<<<< HEAD
   getRepoContributors(argv1, argv2, function(err, result) {
=======
   getRepoContributors("jquery", "jquery", function(err, result) {
>>>>>>> 345f94b42f8dfa5d48048f52f9f88e4337d4a0a5
        console.log("Errors:", err);
        console.log("Result:", result);

     });

   function downloadImageByURL(url, filePath) {
   request.get(url)
   .on('error', function (err) {
     throw err;
   })
   .on('response', function (response) {
     console.log('Response Status Code: ', response.statusCode);

   })
   .pipe(fs.createWriteStream(filePath));
<<<<<<< HEAD
}
=======
}
>>>>>>> 345f94b42f8dfa5d48048f52f9f88e4337d4a0a5
