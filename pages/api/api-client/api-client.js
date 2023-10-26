import { ConflictError } from "../src/errors/ConflictError";

export async function signup(data) {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 409) {
        throw new ConflictError("Conflito de recurso. Email já cadastrado");
      } else {
        throw new Error(`Request error. Status(${response.status}) ${response.statusText}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
