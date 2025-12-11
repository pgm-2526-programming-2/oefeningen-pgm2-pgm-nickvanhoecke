async function fetchData() {
  try {
    const url = "https://api.publicapis.org/entries";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Kon geen gegevens ophalen:", err);
  }
}
fetchData();
