import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownParserProps } from '../../types/components';

const MarkdownParser: React.FC<MarkdownParserProps> = ({ markdown }) => {
  return (
    <ReactMarkdown>
      {typeof markdown === 'string' ? markdown : JSON.stringify(markdown)}
    </ReactMarkdown>
  );
};

export default MarkdownParser;
