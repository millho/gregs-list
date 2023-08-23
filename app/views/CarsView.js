export const CarsView =/*html*/`
    <div class="container-fluid">
  <section class="row">
    <button class="btn btn-info col-1" data-bs-toggle="collapse" data-bs-target="#carFormCollapse">
      List Car! <i class="mdi mdi-car"></i>
    </button>

    <div class="collapse" id="carFormCollapse">

      <form class="row p-2" onsubmit="app.CarsController.createCar()">

        <div class="form-floating mb-3 col-4">
          <input required type="text" minLength="3" maxLength="15" class="form-control" id="carMake" name="make" placeholder="Car Make">
          <label for="carMake">Car Make</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input required type="text" class="form-control" id="carModel" name="model" placeholder="Car Model">
          <label for="carModel">Car Model</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input  required type="number" class="form-control" min="1950"  id="carYear" name="year" placeholder="Car Year">
          <label for="carYear">Car Year</label>
        </div>

        <div class="form-floating mb-3 col-6">
          <input  required type="number" class="form-control" max="10000000" id="carPrice" name="price" placeholder="Car Price">
          <label for="carPrice">Car Price</label>
        </div>

        <div class="form-floating mb-3 col-2">
          <input  required type="color" class="form-control" id="carColor" name="color" placeholder="Car Color">
          <label for="carColor">Car Color</label>
        </div>

        <div class="form-check col-4">
          <input  class="form-check-input" type="checkbox" id="isNew" name="isNew">
          <label class="form-check-label" for="isNew">
            Is this a new car?
          </label>
        </div>

        <div class="form-floating mb-3 col-12">
          <input  required type="text" class="form-control" id="carimgUrl" name="imgUrl" placeholder="Car imgUrl">
          <label for="carimgUrl">Car Image Url</label>
        </div>

        <div class="form-floating">
          <textarea  required maxLength="144" class="form-control" placeholder="Please describe your car" name="description" id="carDescription"
            style="height: 100px"></textarea>
          <label for="carDescription">Car Description</label>
        </div>

        <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
        <div class="text-end">
          <button type="submit" class="btn btn-info">Create Listing</button>

        </div>
      </form>
    </div>
  </section>

    <section class="row justify-content-center" id="cars">

    </section>
  
  
    </div>`