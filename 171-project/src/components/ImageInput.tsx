import React, { ChangeEvent, useState } from 'react';
// import PropTypes from 'prop-types';
// const Canvas = ({draw, height, width}) => {
//   const canvas = React.useRef();
//   React.useEffect(() => {
//     const context = canvas.current.getContext('2d');
//     draw(context);
//   });
// return (
//     <canvas ref={canvas} height={height} width={width} />
//   );
// };
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
//   height: PropTypes.number.isRequired,
//   width: PropTypes.number.isRequired,
// };
// export default Canvas;

const ImageInput: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setImageUrl(url);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleClick=()=>{
    document.getElementById('fileSelect').click();
 }
  return (
    <div className="image-input-container">
      {imageUrl && <img src={imageUrl} alt="Selected Image" style={{ width: '50%', justifyContent: 'center'}} />}
      <input id ='fileSelect' type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}}></input>
      <input type="button" value="Choose File" onClick= {handleClick} />
    </div>
  );
};

export default ImageInput;
