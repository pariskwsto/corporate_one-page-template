import $ from 'jquery';

class Modal {
  constructor() {
    this.getInTouchBtn = $(".get-in-touch");
    this.modal = $(".modal");
    this.closeModalBtn = $(".modal__close");
    this.events();
  }

  events() {
    // Click get in touch buttons
    this.getInTouchBtn.click(this.openModal.bind(this));

    // Click the X modal button
    this.closeModalBtn.click(this.closeModal.bind(this));

    // Push esc key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == '27') {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("visible");
  }
}

export default Modal;
