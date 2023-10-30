
export async function signup(data) {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    return (`Request error. Status(${response.status}) ${response.statusText} \n[${responseBody.error}]`);
    }
   //const responseBody = await response.json();
  localStorage.setItem('token', responseBody.token);

  return responseBody;
}


export async function getUsers(token) {
  try {
    const response = await fetch('/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`       
      }
     });
    
     if (!response.ok) {
      throw new Error(`Request error. Status(${response.status}) ${response.statusText} [${responseBody.details}]`);
  }
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}


export async function login(data) {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(`Request error. Status(${response.status}) ${response.statusText} [${responseBody.error}]`);
    }
  localStorage.setItem('token', responseBody.token);

  return responseBody.token;
}


