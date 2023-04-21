/**
 * @description Adds an animation to an element and removes it once the animation has completed.
 * @param element The HTMLElement to be animated
 * @param animationName The name of the animation from animate.css to be used here. 
 * Basically the CSS class without the "animate__" prefix
 * @param prefix optional. The prefix to add to the animationName
 * @returns {void}
 */
export const animateElement = (element: HTMLElement, animationName: string, prefix = 'animate__') => {
  const hasNoElement = element == null;
  if(hasNoElement) throw "Invalid Input Exception. The given element is null";
  
  const animationCSSClass = `${prefix}${animationName}`;
  
  // We create a Promise and return it
  return new Promise((resolve, reject) => {

    element.classList.add(`${prefix}animated`, animationCSSClass);

    // When the animation ends, we clean the classes and resolve the Promise
    const onAnimationEnd = (event: any) => {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationCSSClass);
      resolve('Animation ended');
    }

    element.addEventListener('animationend', onAnimationEnd, {once: true});
  });

}
