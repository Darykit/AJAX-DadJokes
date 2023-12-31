const url = "https://icanhazdadjoke.com/"

const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", () => {
  fetchDadjoke()
})

const fetchDadjoke = async () => {
  result.textContent = "loading..."
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    })
    
    if (!response.ok) {
      throw new Error('error');
    }
    const data = await response.json()
    console.log(data);
    result.textContent = data.joke
  } catch (error) {
    // console.log(error.message)
    result.textContent = "There was an error..."
  }
}

fetchDadjoke()
