const base_url = import.meta.env.VITE_API_URL || "http://localhost:5000" ;
//careting test fuction to call on base_url running at port 5000
export async function getTestMessage() {
  const res = await fetch(`${base_url}/api/test`);

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}