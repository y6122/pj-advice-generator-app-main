const adviceId = document.getElementById("advice-id");
const adviceText = document.querySelector(".advice");
const buttGenerate = document.querySelector(".generate");

const adviceApi = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return await data.slip;
  } catch (err) {
    console.error(err);
  }
};

const adviceEvent = async () => {
  let adviceData = await adviceApi();
  const { id, advice } = await adviceData;
  adviceId.textContent = `#${id}`;
  adviceText.textContent =advice;
};

buttGenerate.addEventListener("click",adviceEvent);

adviceApi();
adviceEvent();
