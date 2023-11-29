import React, { useState } from 'react';
import ImageInput from './ImageInput';

const ModelOutput: React.FC = () => {
  const [output, setOutput] = useState<string | null>(null);

  const handleImageProcessed = async (outputText: string) => {
    console.log('fetching...')
    const data = await fetch('http://localhost:5000/model', {
      'method':'POST',
      'headers': {'Content-Type': 'application/json'},
      body: outputText
    }).then((response: { json: () => any; }) => response.json()).catch((error: any) => console.log(error));
    setOutput(String(data['hello']))
  };

  return (
    <div className='model'>
      <ImageInput onImageProcessed={handleImageProcessed} />
      {output && (
        <div>
          <p>Output: {output}</p>
        </div>
      )}
    </div>
  );
};

export default ModelOutput;
