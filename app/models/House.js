export class House {
    constructor(data) {
        this.id = data.id
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get HouseTemplate() {
        return /*html*/`
       <div class="col-md-10 elevation-5 rounded-top my-2">
        <div class="row">
          <div class="col-4 p-0">
            <img class="img-fluid rounded-start"
              src=${this.imgUrl}
              alt="">
          </div>
          <div class="col-8">
            <h2 class="text-center">${this.year} ${this.bedrooms} bd ${this.bathrooms} bth</h2>
            <div class="d-flex justify-content-around pt-3">
              <span>$${this.price}</span>
            </div>
            <p>${this.description}</p>
            <div class="text-end py-2">
                <button class="btn btn-danger" onclick="">Remove House <i class="mdi mdi-delete"></i> </button>
            </div>
          </div>
        </div>
      </div>`
    }
}