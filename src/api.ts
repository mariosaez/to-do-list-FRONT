export const login = async (username: string, password: string): Promise<any> => {
    const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });

    if (!response.ok) {
        throw response;
    }

    return response.json();
};

export const register = async (username: string, password: string, email: string, name: string, surname: string): Promise<any> => {
    const response = await fetch('http://localhost:8080/api/users/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email, name, surname }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  };