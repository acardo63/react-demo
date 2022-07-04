import Dog from "../interfaces/Dog";

export const DogPictures = async() => {
    let res = await fetch('https://dog.ceo/api/breeds/image/random');
    return res.json();
}

export const DefaultPicture = () => {
    const defaultDog: Dog = {
        message: 'https://images.dog.ceo/breeds/mountain-bernese/n02107683_6916.jpg'
    };
    return defaultDog;
}