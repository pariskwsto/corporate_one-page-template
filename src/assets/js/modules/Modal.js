const getInTouchBtns = document.querySelectorAll(".get-in-touch");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close");

class Modal {
  constructor() {
    this.getInTouchBtns = getInTouchBtns;
    this.modal = modal;
    this.closeModalBtn = closeModalBtn;

    this.events();
  }

  events() {
    this.getInTouchBtns.forEach((btn) => {
      btn.addEventListener("click", this.openModal.bind(this));
    });

    this.closeModalBtn.addEventListener("click", this.closeModal.bind(this));

    document.addEventListener("keyup", this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == "27") {
      this.closeModal();
    }
  }

  openModal(e) {
    e.preventDefault();

    this.modal.classList.add("visible");
  }

  closeModal() {
    this.modal.classList.remove("visible");
  }
}

export default Modal;
