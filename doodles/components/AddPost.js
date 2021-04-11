import {useState } from 'react'

const newPost= async (objectToPost)=>{
  const res=await fetch("http://localhost:3000/api/posts",{
    method:"POST",
    body:JSON.stringify(objectToPost)
  })
  return res.json()
}


export default function AddPost(props){
    const [description,setDescription]=useState("");
    const [file,setFile]=useState(null)
    const [url,setFileUrl]=useState("");
    
   
   function onSubmit (event)  {
      event.preventDefault()
      console.log('handle uploading-', file);
    const body = new FormData();
    console.log(file)
    body.append('file',file,file.name)

    console.log(file.name)

    fetch("/api/upload", {
      method: "POST",
      body
    })
    const objToPost={
      "userId":props.userId,
      "description":description,
      "likes":0,
      "userName":props.userName,
      "imgSrc":`/photos/${file.name}`,
      "comments":[]
  }
    const res=newPost(objToPost)
    res.then(res=>console.log(res));
   
    };
    function _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        file.url=URL.createObjectURL(file)
       
        setFile(file)
       setFileUrl(URL.createObjectURL(file))
        
      }
  
      reader.readAsDataURL(file)
    }
    
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New post</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        
        <form onSubmit={onSubmit}>
        <div className="form-group">
        <label for="exampleFormControlFile1">Select photo</label>
        <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e)=>_handleImageChange(e)}/>
        <img  className='card-img-top '  src={url}/>
        </div>
        <div className="form-group">
        <label for="exampleFormControlFile1">Description</label>
        <input type="text" className="form-control-file" id="exampleFormControlFile1" onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" >Save changes</button>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
    )
}