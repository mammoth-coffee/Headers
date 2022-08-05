import './App.css';


function ImageName({ input }) {
    const file = input.files[0];
    const filename = file.name;
    console.log(filename);
}

export default ImageName;