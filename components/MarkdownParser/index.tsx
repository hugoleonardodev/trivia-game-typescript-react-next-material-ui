import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownParserProps {
  markdown: string | boolean;
}

const MarkdownParser: React.FC<MarkdownParserProps> = ({ markdown }) => {
  return (
    <ReactMarkdown allowedElements={['p']}>
      {typeof markdown === 'string'
        ? markdown.replace('<p>', '').replace('</p>', '')
        : JSON.stringify(markdown)}
    </ReactMarkdown>
  );
};

export default MarkdownParser;
