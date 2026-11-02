import { messengerHref, normalizePhPhone, type PhPhone } from './phone';

export type Agent = {
  name: string;
  initials: string;
  phone: PhPhone | null;
  messengerUrl: string;
  hasContact: boolean;
};

function initialsFrom(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'AG';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function agentFromParams(input: {
  agent?: string;
  phone?: string;
  messenger?: string;
}): Agent {
  const name = (input.agent || '').trim() || 'Your Agent';
  const phone = input.phone ? normalizePhPhone(input.phone) : null;
  return {
    name,
    initials: initialsFrom(name),
    phone,
    messengerUrl: messengerHref(input.messenger),
    hasContact: Boolean(phone),
  };
}
