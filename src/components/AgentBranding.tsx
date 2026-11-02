import { AgentInfo } from '../types';

interface AgentBrandingProps {
  agentInfo: AgentInfo;
}

export default function AgentBranding({ agentInfo }: AgentBrandingProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '16px 24px',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: 'white',
      }}
    >
      <div
        style={{
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.6)',
          marginBottom: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Your Agent
      </div>
      <div
        style={{
          fontSize: '18px',
          fontWeight: '700',
          marginBottom: '4px',
        }}
      >
        {agentInfo.name}
      </div>
      {agentInfo.phone && (
        <div
          style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>📞</span>
          {agentInfo.phone}
        </div>
      )}
    </div>
  );
}
