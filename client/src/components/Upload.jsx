import React, {useState} from "react";
import UploadService from "../services/upload-service";


const Upload = ({setImage, images}) => {
    const [ name, setName ] = useState("")
    const [ file, setFile ] = useState()
    const [ pathImage, setPathImage ] = useState("http://localhost:4000/upload.png")

    
    const sendImage = (e) => {
        e.preventDefault()
        UploadService.sendImages(name, file).then((result) => {
            console.log("el resultado es: ", result)
        })
    }

    const onFileChange = (e) => {
        if(e.target.files && e.target.files.length > 0){ 
     const file = e.target.files[0]
     if(file.type.includes("image")) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = function load(){
            setPathImage(reader.result)
        }
        setFile(file)
     }else {
        console.log("there was an")
         }
     }
    }


return (
    <form>
        <div>
            <input type="file" placeholder="File"
            onChange={onFileChange} 
            />
        
        <img src={pathImage} alt="image" />
        </div>


        <input type="text"
        placeholder="enter a name"
        onChange={(e)=> setName(e.target.value)} />
        <br/>

        <button
        type="submit"
        onClick={sendImage}> sendImage</button>
    </form>
)

 }
export default Upload;