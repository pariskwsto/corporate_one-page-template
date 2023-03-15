import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

const headerTriggerElement = document.querySelector("h1.large-hero__title");
const header = document.querySelector(".header");
const pageSections = document.querySelectorAll(".large-hero, .page-section");
const headerLinks = document.querySelectorAll(
  ".primary-nav a:not(.get-in-touch)"
);

class StickyHeader {
  constructor() {
    this.headerTriggerElement = headerTriggerElement;
    this.header = header;
    this.pageSections = pageSections;
    this.headerLinks = headerLinks;

    this.createHeaderIntersectionObserver();
    this.createPageSectionWaypoints();
    this.handleHeaderLinksScrolling();
  }

  createHeaderIntersectionObserver() {
    const observer = new IntersectionObserver(
      this.handleHeaderIntersection.bind(this),
      {
        rootMargin: "-100px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(this.headerTriggerElement);
  }

  handleHeaderIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.header.classList.remove("solid");
      } else {
        this.header.classList.add("solid");
      }
    });
  }

  createPageSectionWaypoints() {
    this.pageSections.forEach((pageSection) => {
      new Waypoint({
        element: pageSection,
        handler: (direction) => {
          if (direction === "down") {
            this.handleHeaderLinks(pageSection);
          }
        },
        offset: "130px",
      });

      new Waypoint({
        element: pageSection,
        handler: (direction) => {
          if (direction === "up") {
            this.handleHeaderLinks(pageSection);
          }
        },
        offset: "-40%",
      });
    });
  }

  handleHeaderLinks(pageSection) {
    const matchHeaderLink = pageSection.getAttribute("data-match-link");

    this.headerLinks.forEach((headerLink) => {
      headerLink.classList.remove("active");
    });

    document.querySelector(matchHeaderLink).classList.add("active");
  }

  handleHeaderLinksScrolling() {
    this.headerLinks.forEach((headerLink) => {
      headerLink.addEventListener("click", (e) => {
        e.preventDefault();

        const href = headerLink.getAttribute("href");
        const section = document.querySelector(href);

        const headerHeight = this.header.offsetHeight;
        const scrollPosition =
          section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = scrollPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  }
}

export default StickyHeader;
