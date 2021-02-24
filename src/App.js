import './App.css';
import Editor from './Editor';
import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useLocalStorage('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `);
    }, 400);

    return () => clearTimeout(timeout);
  }, [js, html, css]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="js"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <a href="https://github.com/itsRajat">
        <h1>CODEZEN</h1>
        <h2>DEVELOPED BY RAJAT KAUSHIK</h2>
      </a>
    </>
  );
}

export default App;
