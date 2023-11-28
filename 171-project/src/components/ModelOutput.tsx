import React, { useState } from 'react';
import ImageInput from './ImageInput';

const ModelOutput: React.FC = () => {
  const [output, setOutput] = useState<string | null>(null);

  const handleImageProcessed = (outputText: string) => {
    setOutput(outputText);
  };

  return (
    <div className='model'>
      <ImageInput onImageProcessed={handleImageProcessed} />
      {output && (
        <div style={{ marginTop: '10px', paddingLeft: '20px' }}>
          <p>Output: {output}</p>
        </div>
      )}
    </div>
  );
};

export default ModelOutput;
