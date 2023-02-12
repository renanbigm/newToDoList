const url = `http://localhost:3336/tasks`;

export async function postRequest(task) {
  const info = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ task }),
  };

  const response = await fetch(url, info)
    .then((res) => res.json())
    .then(({ status, ok, body, message }) => {
      if (!ok) {
        console.log(`status: ${status}, ${message}`);
      }
      return body;
    })
    .catch((error) => console.log(error));

  return response;
}

export async function getRequest() {
  const response = await fetch(url, { method: 'GET' })
    .then((res) => res.json())
    .then(({ status, ok, body, message }) => {
      if (!ok) {
        console.log(`status: ${status}, ${message}`);
      }
      return body;
    })
    .catch((error) => console.log(error));

  return response.sort((a, b) => a.index - b.index);
};

export async function putRequest(id, body) {
  const info = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(body),
  };

  await fetch(`${url}/${id}`, info)
    .then((res) => res.json())
    .then(({ status, ok, message }) => {
      if (!ok) {
        console.log(`status: ${status}, ${message}`);
      }
    })
    .catch((error) => console.log(error));
};

export async function deleteRequest(id) {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then(({ status, ok, message }) => {
      if (!ok) {
        console.log(`status: ${status}, ${message}`);
      }
    })
    .catch((error) => console.log(error));
  
  return response;
};
