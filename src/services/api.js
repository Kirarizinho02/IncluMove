const API_BASE_URL = import.meta.env.VITE_API_URL || "mysql://root:IVTtlRzIFcwjJeJDmvsGMJsDlqjlXnVi@metro.proxy.rlwy.net:41448/railway";

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) throw new Error("Erro na API");
  return await response.json();
}