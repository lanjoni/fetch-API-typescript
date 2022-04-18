import fetch from 'cross-fetch';

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
export async function http<T>(
  request: RequestInfo
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(
    request
  );
  response.parsedBody = await response.json();
  return response;
}

// example consuming code
const foo = async () => {
  const response = await http<[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(response)
}

console.log(foo())
