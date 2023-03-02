export function createYoutubeButton(link) {
    const button = document.createElement("button");
    button.innerHTML = "Watch on YouTube";
    button.addEventListener("click", () => {
      window.location.href = link;
    });
    return button;
  }
  