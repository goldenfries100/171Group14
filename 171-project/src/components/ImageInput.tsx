import React, { ChangeEvent, useState } from 'react';
import './ImageInput.css'; // Import a CSS file for styling

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

  return (
    <div className="image-input-container">
      {imageUrl && <img src={imageUrl} alt="Selected Image" style={{ maxWidth: '10%', justifyContent: 'center'}} />}
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageInput;
