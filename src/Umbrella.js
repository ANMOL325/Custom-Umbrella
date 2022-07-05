import React, { useState } from 'react'
import Yellow from "./PICTURE/Yello umbrella.png";
import Blue from "./PICTURE/Blue umbrella.png"
import Pink from "./PICTURE/Pink umbrella.png"
import "./Umbrella.css"

function Umbrella() {
    const [YellowDisplay, setYellowDisplay] = useState("block");
    const [BlueDisplay, setBlueDisplay] = useState("none");
    const [PinkDisplay, setPinkDisplay] = useState("none");
    const [BGColor, setBGColor] = useState("");
    const [BGColorH1, setBGColorH1] = useState();
    const [Image, setImage] = useState();


    const DisplayUmbrella1 = () => {
        setYellowDisplay("block");
        setBlueDisplay("none");
        setPinkDisplay("none");
        setBGColor("rgb(253, 253, 199)");
        setBGColorH1("rgb(212, 212, 142)");


    }
    const DisplayUmbrella2 = () => {
        setBlueDisplay("block");
        setYellowDisplay("none");
        setPinkDisplay("none");
        setBGColor("rgb(200, 200, 255)");
        setBGColorH1("rgb(148, 142, 212)");

    }
    const DisplayUmbrella3 = () => {
        setPinkDisplay("block");
        setBlueDisplay("none");
        setYellowDisplay("none");
        setBGColor("rgb(255, 205, 213)");
        setBGColorH1("rgb(225, 150, 163)");
    }

    const imageHandler = (e) => {
        console.log("Image Handler")
        // console.log(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        console.log(reader);
        reader.onload = () => {
            if(reader.readyState === 2){
                console.log("Inside Reader")
                console.log(reader.result);
                setImage(reader.result)
                console.log(Image);
            }
            
        }
        console.log(Image);
    }





  return (
    <div style={{backgroundColor: BGColor}} className='UmbrellaBody'>
        <h1 style={{backgroundColor: BGColorH1}} >Custom Umbrella</h1>
        <center>
        <img style={{display:YellowDisplay}} className='UmbrellaImg' src={Yellow}></img>
        <img style={{display:BlueDisplay}} className='UmbrellaImg' src={Blue}></img>
        <img style={{display:PinkDisplay}} className='UmbrellaImg' src={Pink}></img>
        <img className='Logo' style={{backgroundImage: `url(${Image})`}}></img>
        </center>
       
        <center className='ButtonDiv'>

        <button onClick={DisplayUmbrella1} className='Yellow'></button>
        <button onClick={DisplayUmbrella2} className='Blue'></button>
        <button onClick={DisplayUmbrella3} className='Pink'></button><br></br>
        <p>
            <strong>Customize your umbrealla</strong>
            <div>Upload a logo for an instant preview.<br></br>
            .png and jpg file only.Max file size is 5MB</div>
        </p>
        <input onChange={imageHandler} type= "File" name="image-upload" id="input" accept="image/*"/><span className='Folder'>📂📄</span>
        
        <div className='label'>
            <label htmlFor='input' className='image-upload'>

            </label>
        </div>
        

        </center>
    </div>
  )
}

export default Umbrella
