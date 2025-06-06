const API_URL = "http://localhost:8080/api";

async function getAllProperties() {
  try {
    const response = await fetch(`${API_URL}/properties`);
    if (!response.ok) throw new Error('Erreur réseau');
    return await response.json();
  } catch (error) {
    console.error('Erreur API :', error);
    throw error;
  }
}

export default {
  getAllProperties,
};
