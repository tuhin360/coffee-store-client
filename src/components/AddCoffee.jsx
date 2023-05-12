const AddCoffee = () => {
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>

      <form>
         {/* form name & quantity row  */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Enter quantity"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>

         {/* form supplier & taste row  */}
        <div className="md:flex  mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2  ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>

         {/* form category and details row  */}
        <div className="md:flex  mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2  ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>

         {/* form photo url row  */}
        <div className=" mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Photo URL"
                className="input input-bordered w-full bg-white"
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
