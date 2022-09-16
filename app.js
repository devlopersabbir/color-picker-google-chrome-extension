const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");
const color = document.getElementById("color");
const colorText = document.getElementById("colorText");

btn.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: {
        tabId: tab.id,
      },
      function: pickColor,
    },
    async (isOpen) => {
      const [data] = await isOpen;

      if (data.result) {
        const expectedColor = data.result.sRGBHex;
        colorText.value = expectedColor;
        color.style.backgroundColor = expectedColor;
        copyBtn.style.display = "block";

        copyBtn.addEventListener("click", () => {
          colorText.select();
          document.execCommand("copy");
          copyBtn.innerText = "Copit";
          copyBtn.style.background = `${expectedColor}`;
        });
      }
    }
  );
});

async function pickColor() {
  try {
    const eyeDropper = new EyeDropper();
    const isOpen = await eyeDropper.open();

    return isOpen;
  } catch (error) {
    console.log(error);
  }
}
