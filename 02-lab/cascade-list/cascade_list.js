class CascadeSelect {
  constructor(select) {
    this.originalSelect = select;
  }

  init() {
    this.collectOptions(); //adatok gyűjtése
    this.createSelects(); //select-ek létrehozása
    this.populate(); //2. select töltése
    this.groupSelect.addEventListener('change', () => {
      this.populate();
    });
  }

  collectOptions() {
    const optGroups = this.originalSelect.querySelectorAll('optgroup');
    this.dataGroups = new Map();
    optGroups.forEach((optGroup) => {
      const subOptions = [];
      optGroup.querySelectorAll('option').forEach((option) => {
        subOptions.push({
          text: option.innerText,
          value: option.getAttribute('value'),
        });
      });
      this.dataGroups.set(optGroup.getAttribute('label'), subOptions);
    });
  }

  createSelects() {
    this.originalSelect.style.display = 'none';

    this.groupSelect = document.createElement('select');
    this.itemSelect = document.createElement('select');

    this.originalSelect.insertAdjacentElement('afterend', this.groupSelect);
    this.groupSelect.insertAdjacentElement('afterend', this.itemSelect);

    const groupOptionsHtml = [...this.dataGroups.keys()]
      .map(
        (groupLabel) => `<option value="${groupLabel}">${groupLabel}</option>`
      )
      .join('');
    this.groupSelect.innerHTML = groupOptionsHtml;
  }

  populate() {
    const currentGroup = this.groupSelect.value;
    const groupItems = this.dataGroups.get(currentGroup);
    const itemOptionsHtml = groupItems
      .map((item) => `<option value="${item.value}">${item.text}</option>`)
      .join('');
    this.itemSelect.innerHTML = itemOptionsHtml;
  }
}

const cascadeSelect = new CascadeSelect(document.querySelector('select'));
cascadeSelect.init();
