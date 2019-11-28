export class SearchString {
  constructor(input, btnSubmit, error) {
    this.input = input;
    this.btnSubmit = btnSubmit;
    this.error = error;
    this.deactivateBtnSubmit();
    this.error.textContent = '';
    this.input.addEventListener('input', this.validInput.bind(this));
  }

  activateBtnSubmit() {
    this.btnSubmit.removeAttribute('disabled');
    this.btnSubmit.classList.add('search__button_active');
  }

  deactivateBtnSubmit() {
    this.btnSubmit.setAttribute('disabled', true);
    this.btnSubmit.classList.remove('search__button_active');
  }

  activateInput() {
    this.input.removeAttribute('disabled');
  }

  deactivateInput() {
    this.input.setAttribute('disabled', true);
  }

  validInput() {
    let value = this.input.value;
    if (value.length > 0) {
      this.activateBtnSubmit();
      this.error.textContent = '';
    } else {
      this.deactivateBtnSubmit();
    }
  }
}