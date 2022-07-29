export default async function verifyToken(token) {
  try {
    const res = await fetch("http://localhost:3000/verify", {
      method: "GET",
      headers: {
        Authorization: token,
      },
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
