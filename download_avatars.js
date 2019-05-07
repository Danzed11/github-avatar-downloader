var request = require('request');
var secret = require('./secret.js')
var fs = require('fs')
var argv1 = process.argv[2];
var argv2 = process.argv[3];
  if (!argv1)
    console.log("No input received");
    process.exit();
console.log('Welcome to Github Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) { //Request for JSON, returning array of contribs
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
     cb(err, body); //Anon callback function
     });
   };

   getRepoContributors(argv1, argv2, function(err, result) {
        console.log("Errors:", err);
        console.log("Result:", result);

     });

   function downloadImageByURL(url, filePath) { //Fetches desired avatar_url
   request.get(url)
   .on('error', function (err) {
     throw err;
   })
   .on('response', function (response) {
     console.log('Response Status Code: ', response.statusCode);

   })
   .pipe(fs.createWriteStream(filePath));
}

}
