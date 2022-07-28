export default async function getUser(body) {
  try {
    const res = await fetch("http://localhost:3000/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = { status: res.status, text: res.statusText };
      throw err;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
