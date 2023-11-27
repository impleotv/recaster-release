const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN = './main.mustache';
const axios = require('axios');

var args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Please enter a version number');
}


console.log(`Version ${args[0]}`);
let pjsonRecaster;

if(!args[0]) {

  try {
    pjsonRecaster = JSON.parse(fs.readFileSync('./recaster/package.json', 'utf8'));
  } catch (error) {

  }
}



let DATA = {
  version: args[0] || pjsonRecaster.version,
  date: new Date().toLocaleDateString('en-IL', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Jerusalem',
  }),
  latestTag: ''   //TMP
};

function generateReadMe() {
  try {
    fs.readFile(MUSTACHE_MAIN, (err, data) => {
      if (err) throw err;
      const output = Mustache.render(data.toString(), DATA);
      fs.writeFileSync('README.md', output);
    });
  } catch (error) {

  }
}


// async function getLatestReleaseTag(repoOwner, repoName) {
//   try {
//     const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`);
//     return response.data.tag_name;
//   } catch (error) {
//     console.error('Error fetching latest release:', error.message);
//     return null;
//   }
// }

generateReadMe();



// const repoOwner = 'impleotv';
// const repoName = 'recaster-release';


// getLatestReleaseTag(repoOwner, repoName)
//   .then((tag_name) => {
//     if (tag_name) {
//       console.log('Latest release tag:', tag_name);
//       DATA.latestTag = tag_name;
//       generateReadMe();
//     } else {
//       console.log('Failed to retrieve the latest release URL.');
//     }
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });



