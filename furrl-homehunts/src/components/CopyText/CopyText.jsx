import React, { useState } from 'react'

import clipboardCopy from 'clipboard-copy'

const CopyText = async({link}) => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async () => {
      try {
        await clipboardCopy(link);
        setCopySuccess('Link copied!');
      } catch (err) {
        setCopySuccess('Failed to copy the link.');
      }
    };
  
    return (
      <div>
        <button onClick={copyToClipboard}>Copy Link</button>
        {copySuccess && <p>{copySuccess}</p>}
      </div>
    );
}

export default CopyText