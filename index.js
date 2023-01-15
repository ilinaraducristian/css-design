//@ts-check
const size = 160;

window.onload = () => {
  const hoverContainerElement = /** @type {HTMLDivElement} */ (document.getElementById('hoverContainer'));
  const imagesContainerElement = /** @type {HTMLUListElement} */ (document.getElementById('imagesContainer'));
  const projectsElement = /** @type {HTMLUListElement} */ (document.getElementById('projects'));
  projectsElement.addEventListener('mouseenter', displayHoverContainer(hoverContainerElement));
  projectsElement.addEventListener('mouseleave', hideHoverContainer(hoverContainerElement));
  projectsElement.addEventListener('mousemove', moveHoverContainer(hoverContainerElement));

  Array.from(document.getElementsByClassName('project'))
  .forEach((li, i) =>
    li.addEventListener('mouseenter', changeHoverContainerImage(imagesContainerElement, i))
  );
}

/**
 * @param {HTMLUListElement} imagesContainerElement
 * @param {number} i
 */
function changeHoverContainerImage(imagesContainerElement, i) {
  return () => {
    imagesContainerElement.style.transform = `translateY(-${i*size}px)`;
    console.log(i);
  }
}

/**
 * @param {HTMLDivElement} hoverContainerElement
 */
function displayHoverContainer(hoverContainerElement) {
  return () => {
    hoverContainerElement.style.display = 'block';
  }
}

/**
 * @param {HTMLDivElement} hoverContainerElement
 */
function hideHoverContainer(hoverContainerElement) {
  return () => {
    hoverContainerElement.style.display = 'none';
  }
}

/**
 * @param {HTMLDivElement} hoverContainerElement
 */
function moveHoverContainer(hoverContainerElement) {
  /**
   * @param {MouseEvent} event
   */
  return (event) => {
    hoverContainerElement.style.left = `${event.pageX-size/2}px`;
    hoverContainerElement.style.top = `${event.pageY-size/2}px`;
  }
}