import React, { useEffect } from "react";
import { useState } from "react";

const PreviewAvatar = () => {
    const [image, setImage] = useState();
    
    useEffect( () => {
        return () => {
        console.log("delete")
        image && URL.revokeObjectURL(image.preview)
        }
}, [image])
    
const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImage(file)
    }
    
    return (
        <div style={{"padding":32 }}>
        <input 
        type="file"
        onChange={handlePreviewAvatar}
        ></input>
        {image && (
            <img src={image.preview} alt ="" width="80%" />
        )}
        </div>
    )
}
export default PreviewAvatar