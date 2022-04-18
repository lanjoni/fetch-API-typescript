import fetch from 'cross-fetch';

export async function http(
    request: RequestInfo
  ): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }
  
  // example consuming code
  const foo = async () => {
    const data = await http(
        "https://positive-vibes-api.herokuapp.com/quotes/random" // Or your API link
    );

    console.log(data)
  }

console.log(foo())
