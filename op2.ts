import fetch from 'cross-fetch';

export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

// example consuming code
interface Todo {
  data: string; // In this case I only have 'data', but in your JSON you can add more than one info (type)
}

const foo = async () => {
  const data = await http<Todo[]>(
    "https://positive-vibes-api.herokuapp.com/quotes/random"
  );

  console.log(data)
}

console.log(foo())
