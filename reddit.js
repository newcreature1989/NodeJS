const path = require ('path');
const fs = require ('fs');
const rp = require ('request-promise');

let dataPath = path.join(__dirname, "popular-articles.json");


rp('https://www.reddit.com/r/popular.json', (err, res, body) => {
    if (err) {
        console.log(err=> console.log(`Something Smells! ${err}`));
    }

    let parsedArticles = JSON.parse(body);
    let articleArr = [];

    parsedArticles.data.children.forEach(article => {
        let articleData = {
            title: article.data.title,
            url: article.data.url,               
            author: article.data.author,
        }
        
        articleArr.push(articleData);
    });

    fs.writeFile(dataPath, JSON.stringify(articleArr, null, 2), (err) => {
        if (err) {
        console.log(`Danger, Will Ribinson! ${err}`)
        }
    
        console.log('Mission Accomplished!')
    });

});
    
    