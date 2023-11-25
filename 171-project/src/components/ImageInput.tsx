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

const ImageInput: React.FC<{ onImageProcessed: (output: string) => void }> = ({ onImageProcessed }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setImageUrl(url);

        // Assume you have a function named processImage
        const output = processImage(url);
        onImageProcessed(output);
      };

      reader.readAsDataURL(file);
    }
  };
//   const handleClick=()=>{
//     document.getElementById('fileSelect').click();
//  }
//   return (
//     <div className="image-input-container">
//       {imageUrl && <img src={imageUrl} alt="Selected Image" style={{ width: '50%', justifyContent: 'center'}} />}
//       <input id ='fileSelect' type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}}></input>
//       <input type="button" value="Choose File" onClick= {handleClick} />

  const processImage = (url: string): string => {
    // Implement your image processing logic here
    // For example, return a simple string for demonstration purposes
    return `Processed: ${url}`;
  };

  return (
    <div
      className="image-input-container"
      style={{
        position: 'relative',
        maxWidth: '30%', // Set the maximum width for the container
        paddingTop: '5px',
        margin: '0 auto', // Center the container horizontally
        textAlign: 'center', // Center the content horizontally
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Selected Image"
          style={{
            width: '100%', // Make the image fill the container
            paddingBottom: '10px', // Add some padding space
          }}
        />
      )}
      <input type="file" accept="image/*" onChange={handleImageChange} style={{ zIndex: 2, display: 'block', margin: '0 auto' }} />
    </div>
  );
};

export default ImageInput;
