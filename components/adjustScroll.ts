const onWheel = (node: HTMLDivElement) => (e: WheelEvent) => {
  e.preventDefault();
  if (e.deltaY > 0) {
    node.scrollTo(0, node.scrollTop + window.innerHeight);
  } else {
    node.scrollTo(0, node.scrollTop - window.innerHeight);
  }
};

export const ScrollWheelAdjust = (node: HTMLDivElement) => {
  if (node == null) {
    return;
  }
  node.addEventListener("wheel", onWheel(node), { passive: false });
};
