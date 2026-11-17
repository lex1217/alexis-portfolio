const packaging = {
  before: {
    eyebrow: "Routine upload",
    title: "A broad title and undifferentiated visual",
    copy: "The topic is harder to scan, and the episode offers few obvious entry points.",
    thumbnail: "A conversation with a guest",
    chapters: ["Full episode"]
  },
  after: {
    eyebrow: "Structured packaging",
    title: "A specific hook with navigable chapters",
    copy: "The reconstructed visual highlights the guest topic; chapters make meaningful moments easier to find.",
    thumbnail: "A fresh angle on a familiar topic",
    chapters: ["Opening question", "The turning point", "Practical takeaway", "Closing reflection"]
  }
};
const controls = document.querySelectorAll("[data-packaging]");
const visual = document.querySelector("#packaging-visual");
for (const button of controls) {
  button.addEventListener("click", () => {
    const state = button.dataset.packaging;
    const content = packaging[state];
    visual.dataset.state = state;
    document.querySelector("#packaging-eyebrow").textContent = content.eyebrow;
    document.querySelector("#packaging-title").textContent = content.title;
    document.querySelector("#packaging-copy").textContent = content.copy;
    document.querySelector("#thumbnail-title").textContent = content.thumbnail;
    document.querySelector("#chapter-list").replaceChildren(...content.chapters.map(text => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }));
    for (const control of controls) {
      const active = control === button;
      control.classList.toggle("is-active", active);
      control.setAttribute("aria-pressed", String(active));
    }
  });
}
