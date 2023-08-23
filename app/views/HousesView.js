export const HousesView = `
<section class="row">
    <button class="btn btn-info col-1" data-bs-toggle="collapse" data-bs-target="#houseFormCollapse">
      List your House
    </button>

    <div class="collapse" id="houseFormCollapse">

      <form class="row p-2" onsubmit="">

        <div class="form-floating mb-3 col-4">
          <input required type="text" minLength="3" maxLength="15" class="form-control" id="houseBed" name="make" placeholder="# of bedrooms">
          <label for="houseBed"># of bedrooms</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input required type="text" class="form-control" id="houseBath" name="model" placeholder="# of bathrooms">
          <label for="houseBath"># of bathrooms</label>
        </div>

        <div class="form-floating mb-3 col-4">
          <input  required type="number" class="form-control" min="1950"  id="HouseYear" name="year" placeholder="House Year">
          <label for="HouseYear">House Year</label>
        </div>

        <div class="form-floating mb-3 col-6">
          <input  required type="number" class="form-control" max="10000000" id="housePrice" name="price" placeholder="House Price">
          <label for="housePrice">House Price</label>
        </div>

        <div class="form-floating mb-3 col-12">
          <input  required type="text" class="form-control" id="houseimgUrl" name="imgUrl" placeholder="House imgUrl">
          <label for="houseimgUrl">House Image Url</label>
        </div>

        <div class="form-floating">
          <textarea  required maxLength="144" class="form-control" placeholder="Please describe your House" name="description" id="houseDescription"
            style="height: 100px"></textarea>
          <label for="houseDescription">House Description</label>
        </div>

        <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
        <div class="text-end">
          <button type="submit" class="btn btn-info">Create Listing</button>

        </div>
      </form>
    </div>
</section>

<section class="row justify-content-center" id="houses">

</section>
`