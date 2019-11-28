export class Chart {
  constructor(container, dayWeekObj, mentions, currMonth) {
    this.container = container;
    this.dayWeekObj = dayWeekObj;
    this.mentions = mentions;
    this.month = currMonth;
  }

  createChart() {
    let stringHTML = '';
    const caption = `<h4 class="chart__heading">Аналитика по дням</h4>
    <div class="chart__container">
      <div class="chart__row chart__row_caption">
        <div class="chart__col chart__col_date">
          <p>Дата<br>(${this.month})</p>
        </div>
        <div class="chart__col chart__col_amount">
          <p>Кол-во упоминаний</p>
        </div>
      </div>
      <div class="chart__row chart__row_scale">
        <div class="chart__col chart__col_date"></div>
        <div class="chart__col chart__col_scale">
          <div class="chart__scale-item">0</div>
          <div class="chart__scale-item">25</div>
          <div class="chart__scale-item">50</div>
          <div class="chart__scale-item">75</div>
          <div class="chart__scale-item">100</div>
        </div>
      </div>`;
    stringHTML += caption;

    for (let date in this.dayWeekObj) {
      const day = this.dayWeekObj[date];
      const mentions = this.mentions[day] ? this.mentions[day] : 0;
      const mentionsStyle = !mentions ? 'chart__progress_null' : '';
      const row = `<div class="chart__row">
      <div class="chart__col chart__col_date">
        ${day}
      </div>
      <div class="chart__col chart__col_amount">
        <div class="chart__progress ${mentionsStyle}" style="width: ${mentions}%">${mentions}</div>
      </div>
    </div>`
      stringHTML += row;
    }

    const scaleBottom = `<div class="chart__row chart__row_scale">
    <div class="chart__col chart__col_date"></div>
    <div class="chart__col chart__col_scale">
      <div class="chart__scale-item">0</div>
      <div class="chart__scale-item">25</div>
      <div class="chart__scale-item">50</div>
      <div class="chart__scale-item">75</div>
      <div class="chart__scale-item">100</div>
    </div>
  </div>`
    stringHTML += scaleBottom;

    this.container.insertAdjacentHTML('afterbegin', stringHTML.trim());
  }
}