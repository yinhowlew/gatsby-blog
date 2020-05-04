import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl';

const CodeBlock = ({children, className}) => {
  // const language = className.replace(/language-/, '')
  const languageClass = className || ''; 
  const matches = languageClass.match(/language-(?<lang>.*)/);
  const language = matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      // language="jsx" 
  return (
    <Highlight {...defaultProps} 
      code={children} 
      theme={theme}
      language={language}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre 
          className={className} 
          style={{
            ...style, 
            padding: '20px', 
            overflow: 'scroll',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock;