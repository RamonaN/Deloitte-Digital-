const fs = require('fs')
let posts;
fs.readFile('./pages/api/database.json', 'utf8', (err, jsonString) => {
  if (err) {
      console.log("Error reading file from disk:", err)
      return
  }
  try {
      posts = JSON.parse(jsonString)
} catch(err) {
      console.log('Error parsing JSON string:', err)
  }
})

export default (req, res) => {

    
    if(req.method==="GET"){
      res.statusCode = 200
      res.json({ posts: posts })
    }
    if(req.method==="POST"){
      let objectToPush=JSON.parse(req.body);
      let postId=Math.floor(Math.random() * 100) + 1;
      objectToPush.postId=postId;
      posts.push(objectToPush)
      fs.writeFile('./pages/api/database.json', JSON.stringify(posts), (err) => {
        if (err) console.log('Error writing file:', err)
    })
      res.json({status:"success"})
    }
   
  }