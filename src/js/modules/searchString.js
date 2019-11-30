export class SearchString {
  constructor(input, btnSubmit, error) {
    this.input = input;
    this._btnSubmit = btnSubmit;
    this._error = error;
    this.deactivateBtnSubmit();
    this._error.textContent = '';
    this.input.addEventListener('input', this._validInput.bind(this));
  }

  activateBtnSubmit() {
    this._btnSubmit.removeAttribute('disabled');
    this._btnSubmit.classList.add('search__button_active');
  }

  deactivateBtnSubmit() {
    this._btnSubmit.setAttribute('disabled', true);
    this._btnSubmit.classList.remove('search__button_active');
  }

  activateInput() {
    this.input.removeAttribute('disabled');
  }

  deactivateInput() {
    this.input.setAttribute('disabled', true);
  }

  _validInput() {
    let value = this.input.value;
    if (!value.length) {
      this.deactivateBtnSubmit();
      this._error.textContent = 'Введите ключевое слово';
    } else {
      this.activateBtnSubmit();
      this._error.textContent = '';
    }
  }
}