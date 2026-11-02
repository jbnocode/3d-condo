import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Uncomment these lines to enable Theatre.js Studio for editing animations:
// import studio from '@theatre/studio';
// import extension from '@theatre/r3f/dist/extension';
// studio.extend(extension);
// studio.initialize();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1a1a2e',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏢</div>
          <div>Loading 3D Experience...</div>
        </div>
      </div>
    }>
      <App />
    </Suspense>
  </React.StrictMode>
);
