export type PhPhone = {
  e164: string;
  local: string;
  display: string;
  digits: string;
};

export function normalizePhPhone(input: string): PhPhone | null {
  const d = input.replace(/\D/g, '');
  let local = d;
  if (d.startsWith('63') && d.length === 12) local = `0${d.slice(2)}`;
  else if (d.startsWith('9') && d.length === 10) local = `0${d}`;
  else if (d.startsWith('09') && d.length === 11) local = d;
  else return null;
  if (!/^09\d{9}$/.test(local)) return null;
  return {
    e164: `+63${local.slice(1)}`,
    local,
    display: `${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7)}`,
    digits: local,
  };
}

export function callHref(phone: PhPhone) {
  return `tel:${phone.e164}`;
}

export function viberHref(phone: PhPhone) {
  return `viber://chat?number=${phone.e164.replace('+', '')}`;
}

export function messengerHref(handle?: string) {
  if (handle && handle.trim()) {
    return `https://m.me/${handle.replace(/^@/, '').trim()}`;
  }
  return 'https://www.messenger.com/';
}
