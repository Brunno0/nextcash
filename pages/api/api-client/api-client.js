
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
     const responseBody = await response.json();
     if (!response.ok) {
      throw new Error(`Request error. Status(${response.status}) ${response.statusText} [${responseBody.details}]`);
  }
     return responseBody;
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


export async function getAccountByUserId(token, userId) {
  try {
    const response = await fetch(`/api/getAccountById?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    });
    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(`Request error. Status(${response.status}) ${response.statusText} [${responseBody.details}]`);
    }

    return responseBody;
  } catch (error) {
    console.error(error.message);
  }
}



export async function getUserById(token) {
  try {
    const response = await fetch(`/api/getUserById`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    });
    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(`Request error. Status(${response.status}) ${response.statusText} [${responseBody.details}]`);
    }
    return responseBody;
  } catch (error) {
    console.error(error.message);
  }
}


export async function getTransactionsById(token, accountId) {
  try {
    const response = await fetch(`/api/${accountId}`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    });

    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(`Request error. Status(${response.status}) ${response.statusText} \n[${responseBody.details}]`);
    }
    return responseBody;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createTransaction(token, accountDebited, accountCredited, value) {
  console.table(token, accountDebited, accountCredited, value)
  try {
    const response = await fetch(`/api/createTransaction`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify({
        accountDebited, accountCredited, value}) // Converte o objeto em uma string JSON
    });

    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(`Request error. Status(${response.status}) ${response.statusText} \n[${responseBody.details}]`);
    }
    return responseBody;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getAccounts(token) {
  try {
    const response = await fetch(`/api/getAccounts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    });
    const responseBody = await response.json();
    if (!response.ok) {
      throw new Error(`Request error. Status(${response.status}) ${response.statusText} [${responseBody.details}]`);
    }

    return responseBody;
  } catch (error) {
    console.error(error.message);
  }
}