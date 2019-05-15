import Common from './Common.js';
import Data from './data.js';

class FetchFromApi {

  constructor() {
    this.listApiData();
    this.FetchApiElement = document.querySelector(".viewBtn");
  }

  async listApiData() {
    let ApiData = await Data.getApiData();
    const data = [ApiData];

    let show = document.querySelector(".data");
    let showEverything = document.querySelector('.group');
    this.FetchApiElement.addEventListener("click", () => {
      this.FetchApiElement.innerHTML = "Time:  "+ApiData.time;
      for (let x of Object.keys(ApiData.rates)) {
        let listElement = Common.toDom(`
          <div class="col-md-6">
            <ul class="list-group">
              <li class="list-group-item active">${x}</li>
              <li class="list-group-item">USD rate: ${ApiData.rates[x].rate}</li>
              <li class="list-group-item">Name: ${ApiData.rates[x].name}</li>
            </ul>
          </div>
       `);
        show.appendChild(listElement);
      }
    });
  }

}
export default FetchFromApi;