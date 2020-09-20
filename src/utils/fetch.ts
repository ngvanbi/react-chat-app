import fetch from 'unfetch';

export default async function (request: RequestInfo, init?: RequestInit) {
  const res = await fetch(request, init);
  return res.json();
}
