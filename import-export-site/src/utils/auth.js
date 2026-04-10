export const ADMIN_STORAGE_KEY = "ie_admin_auth";

export function getAdminAuth() {
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setAdminAuth(data) {
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(data));
}

export function clearAdminAuth() {
  localStorage.removeItem(ADMIN_STORAGE_KEY);
}

export function getAdminToken() {
  return getAdminAuth()?.token || "";
}

export function isAdminLoggedIn() {
  return Boolean(getAdminToken());
}
