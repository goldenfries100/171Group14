import React, { ChangeEvent, useState } from 'react';

const ImageInput: React.FC<{ onImageProcessed: (output: string) => void }> = ({ onImageProcessed }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setImageUrl(url);
        const output = url;
        onImageProcessed(output);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-input-container">
      {imageUrl && (
        <img src={imageUrl} alt="Selected Image" />
      )}
      <input type="file" accept="image/*" onChange={handleImageChange}/>
    </div>
  );
};

export default ImageInput;
