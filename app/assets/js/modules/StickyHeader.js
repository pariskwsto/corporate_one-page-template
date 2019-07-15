import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.Header = $(".header");
    this.headerTriggerElement = $("h1.large-hero__title");
    this.pageSections = $(".page-section, .large-hero");
    this.headerLinks = $(".primary-nav a");
    this.lazyImages = $("lazyload");
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScroll();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    const headerObj = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          headerObj.Header.addClass("solid");
        } else {
          headerObj.Header.removeClass("solid");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    const allHeaderLinks = this.headerLinks;
    this.pageSections.each(function() {
      const currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            const matchHeaderLink = currentPageSection.getAttribute("data-match-link");
            allHeaderLinks.removeClass("active");
            $(matchHeaderLink).addClass("active");
          }
        },
        offset: "130px" // default 0
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            const matchHeaderLink = currentPageSection.getAttribute("data-match-link");
            allHeaderLinks.removeClass("active");
            $(matchHeaderLink).addClass("active");
          }
        },
        offset: "-40%" // default 0
      });
    });
  }
}

export default StickyHeader;
