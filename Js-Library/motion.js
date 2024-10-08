const slowTransition = { transition: { duration: 1.5, type: "spring" } };
const fastTransition = { transition: { duration: 0.8, type: "spring" } };

const tapAnimation = {
  whileTap: { scale: 0.9 },
  ...fastTransition,
};
const hoverAnimation = {
  whileHover: { scale: 1.1 },
  ...fastTransition,
};
const popUp = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  ...slowTransition,
  viewport: { once: true },
};

const fromup = {
  initial: { y: -50, opacity: 0.4 },
  whileInView: { y: 0, opacity: 1 },
  ...slowTransition,
  viewport: { once: true },
};
const fromBottom = {
  initial: { y: 100, opacity: 0.4 },
  whileInView: { y: 0, opacity: 1 },
  ...slowTransition,
  viewport: { once: true },
};


export {
  hoverAnimation,
  tapAnimation,
  fromup,
  fromBottom,
  slowTransition,
  popUp,
};
