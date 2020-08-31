export const handleOutsideClick = (target, callback) => {
  const listener = (event) => {
    !target.contains(event.target) && callback();
  };
  document.addEventListener('click', listener);

  return () => document.removeEventListener('click', listener);
};
