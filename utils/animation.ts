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

export const fadeInOutApplier = (delay: number) => (node: HTMLDivElement) => {
  if (node == null) {
    return;
  }
  const promises: any = [];

  const createPromise = (target: HTMLDivElement, index: number): Promise<""> => {
    return new Promise((res) => {
      setTimeout(() => {
        setHorizontalFadeInAnimation(target, index);
        res("");
      }, 500 + delay * index);
    });
  };

  const observer = new IntersectionObserver(
    async (entries: IntersectionObserverEntry[]) => {
      const sectionEl = entries[0];
      const childTarget: NodeListOf<HTMLDivElement> =
        sectionEl.target.querySelectorAll(":scope>div");
      if (sectionEl.isIntersecting) {
        childTarget.forEach((target: HTMLDivElement, index: number) => {
          promises.push(createPromise(target, index));
        });
      } else {
        await Promise.all(promises);
        childTarget.forEach((target: HTMLDivElement) => {
          setFadeOut(target);
        });
      }
    },
    { threshold: 0.8 }
  );

  // const sectionRef: HTMLElement = node.current as HTMLElement;
  const childCollection: NodeListOf<HTMLDivElement> = node.querySelectorAll(":scope>div");
  childCollection.forEach((target: HTMLDivElement) => {
    setFadeOut(target);
  });

  observer.observe(node);
};
