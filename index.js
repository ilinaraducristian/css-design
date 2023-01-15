//@ts-check
const size = 160;

window.onload = () => {
  const hoverContainerElement = /** @type {HTMLDivElement} */ (document.getElementById('hoverContainer'));
  const imagesContainerElement = /** @type {HTMLUListElement} */ (document.getElementById('imagesContainer'));
  /** @type {HTMLUListElement} */ (document.getElementById('projects')).addEventListener('mousemove', moveHoverContainer);

  document.querySelectorAll('#projects > li')
  .forEach((li, i) =>
    li.addEventListener('mouseenter', changeHoverContainerImage(i))
  );
  
  /**
   * @param {number} i
   */
  function changeHoverContainerImage(i) {
    return () => {
      imagesContainerElement.style.transform = `translateY(-${i*size}px)`;
    };
  }
  
  /**
   * @param {MouseEvent} event
   */
  function moveHoverContainer(event) {
    hoverContainerElement.style.left = `${event.pageX-size/2}px`;
    hoverContainerElement.style.top = `${event.pageY-size/2}px`;
  }
}
