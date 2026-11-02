interface LoadingIndicatorProps {
  isLoading: boolean;
  progress?: number;
}

export default function LoadingIndicator({ isLoading, progress }: LoadingIndicatorProps) {
  if (!isLoading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Spinner */}
      <div
        style={{
          width: '60px',
          height: '60px',
          border: '4px solid rgba(255, 255, 255, 0.2)',
          borderTop: '4px solid #ffeb3b',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />

      {/* Loading text */}
      <div
        style={{
          marginTop: '24px',
          fontSize: '18px',
          fontWeight: '500',
          color: 'white',
        }}
      >
        Loading 360° View...
      </div>

      {/* Progress bar (if progress provided) */}
      {progress !== undefined && (
        <div
          style={{
            marginTop: '16px',
            width: '200px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: '#ffeb3b',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      )}

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
