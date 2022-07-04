import { useEffect, useState } from "react";
import Dog from "../interfaces/Dog";
import { DefaultPicture, DogPictures } from "../services/DogService";

function DogDay() {
    
    const [dogPicture, setDogPicture] = useState<Dog>({})

    useEffect(() => {
        let pic = DefaultPicture();
        setDogPicture(pic);
    },[]);

    const otraFoto = async () => {
        let newPic = await DogPictures();
        setDogPicture(newPic);
    }

    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 className="uk-card-title">Dog of the day</h3>
            <img src={dogPicture.message} alt="" style={{margin: '1em'}}/>
            <br />
            <button className="uk-button uk-button-danger" onClick={otraFoto}>Give me another</button>
        </div>
    )
}

export default DogDay;