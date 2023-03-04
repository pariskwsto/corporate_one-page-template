class RevealOnScroll {
  constructor(elements, offset = 0.5) {
    this.elements = elements;
    this.offset = offset;

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        threshold: this.offset,
      }
    );
    this.elements.forEach((element) => {
      this.observer.observe(element);
    });

    this.hideInitially();
  }

  hideInitially() {
    this.elements.forEach((el) => {
      el.classList.add("reveal-item");
    });
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.show(entry.target);
      }
    });
  }

  show(element) {
    element.classList.add("reveal-item--is-visible");
  }
}

export default RevealOnScroll;
