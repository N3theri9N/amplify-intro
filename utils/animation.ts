export const classes = {
  fadeOut: ["opacity-0", "duration-500"],
  fadeIn: ["animate-fadeIn", "duration-500"],
  goLeft: ["animate-goLeft"],
  goRight: ["animate-goRight"],
};

export const setHorizontalFadeInAnimation = (target: HTMLDivElement, index: number) => {
  const { fadeOut, fadeIn, goLeft, goRight } = classes;

  target.classList.remove(...fadeOut);
  if (index % 2 === 0) {
    target.classList.add(...goLeft, ...fadeIn);
  } else {
    target.classList.add(...goRight, ...fadeIn);
  }
};

export const setFadeOut = (target: HTMLDivElement) => {
  const { fadeOut, fadeIn, goLeft, goRight } = classes;

  target.classList.remove(...goRight, ...goLeft, ...fadeIn);
  target.classList.add(...fadeOut);
};
