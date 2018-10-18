const path = require ('path');
const fs = require ('fs');
const rp = require ('request-promise');
let articleArr = [];
let articleDownloadArr = [];
let options = { encoding: 'binary' }


rp('https://www.reddit.com/r/popular.json') 
   .then(data => {
       let parsedData = JSON.parse(data);

       parsedData.data.children.forEach(parsedArticle => {
           let articleURL = {
               id: parsedArticle.data.id,
               url: parsedArticle.data.url
           };
           articleArr.push(articleURL);
        });
        
        articleArr.forEach(obj => {
            if(path.extname(obj.url)) {
                articleDownloadArr.push(obj)
                rp(obj.url, options)
                .then(data => {
                    fs.writeFile(`./downloads/${obj.id}${path.extname(obj.url)}`, data, options, err => {
                        if(err) console.log(`Something went wrong`)
                    })
                })
            }
        })
   })
   .catch(err => {
    console.log(`Wrong: ${err}`);
   });




   
    
    
    
    
    
    
    