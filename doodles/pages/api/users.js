// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const users=[
    {userId:'1',
     userName:"John Doe",
     email:"user@gmail.com",
     password:'test',
     posts:[
      {postId:"1A",
       userId:'1',
       userName:'John Doe',
       imgSrc:"/photos/5.png",
       likes:24,
       description:"My sweet angel",
       comments:[
         {commId:"1D",
          userName:"jonn",
          commText:'veri nice'
           },
           {commId:"2D",
          userName:"jonn",
          commText:'veri nice'
           }
       ]
   },
   {postId:"2B",
   userId:'1',
   userName:'John Doe',
   imgSrc:"/photos/5.png",
   likes:24,
   description:"My sweet angel",
   comments:[
     {commId:"1D",
      userName:"jonn",
      commText:'veri nice'
       },
       {commId:"2D",
      userName:"jonn",
      commText:'veri nice'
       }
   ]
}
    ],
     },
     {userId:'2',
     userName:"Johny",
     email:"test@yahoo.com",
     password:"1234",
     userFollowers:[{userId:"12"},{userId:"2"}],
     userFollowing:[{userId:"12"},{userId:"2"}],
     posts:[
      
      {postId:"2",
      imgSrc:"/photos/5.png",
      likes:34,
      description:"Just one word...perfection!",
      comments:[
        {commId:"1D",
         userName:"jonn",
         commText:'veri nice'
          },
          {commId:"2D",
         userName:"jonn",
         commText:'veri nice'
          }
      ]
     }
     ]
     }]
  
  function findUser(users, email,password) {
      const collection =users;
      return collection.filter(item=>item.email===email && item.password===password)
    }
  
    
  
  export default (req, res) => {
    if(req.method==="POST"){
      let emailObject=req.body;
      let email=emailObject.email;
      let password=emailObject.password
      const user=findUser(users,email,password)
      if(user.length){
        res.statusCode = 200
        res.json({ user:user, isLogged:true})
      }
      else{
        res.statusCode=404
        res.json({message:"User not found"})
      }
    }

    if(req.method==="GET" && req.query.id){
      const user=users.filter(item=>String(item.userId)===req.query.id);
      res.status(200);
      res.json({"user":user})
     
    }
   
   
  }
  