const fetchAdvice = async () => {
  const result = await fetch("https://api.adviceslip.com/advice");
  const data = await result.json();

  document.getElementById(
    "advice-number"
  ).innerHTML = `Advice # ${data.slip.id}`;
  document.getElementById("advice-text").innerHTML = `"${data.slip.advice}"`;
};

fetchAdvice();
