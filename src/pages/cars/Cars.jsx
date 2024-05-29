import { useState } from "react";
import UserModal from "../../components/modal/UserModal";
import { NavLink } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([
    {
      id: "dfkmsl",
      name: "MERS",
      price: "5655",
      color: "black",
      year: "2025",
      brand: "merc",
      action: "21654",
    },
    {
      id: "kncdkl",
      name: "BMW",
      price: "5655",
      color: "red",
      year: "2015",
      brand: "bmw",
      action: "21654",
    },
  ]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [currentCar, setCurrentCar] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleEdit = (car) => {
    setCurrentCar(car);
    setModal(true);
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <UserModal
        open={modal}
        toggle={() => setModal(false)}
        cars={cars}
        setCars={setCars}
        currentCar={currentCar}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-1">
            <div className="row my-4">
              <div className="col-4">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setCurrentCar(null);
                    setModal(true);
                  }}
                >
                  Open Modal
                </button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="row mt-4">
              <table className="table table-bordered table-hover table-striped">
                <thead>
                  <tr>
                    <td>T/R</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Brand</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {filteredCars.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.year}</td>
                      <td>{item.color}</td>
                      <td>{item.brand}</td>
                      <td>{item.action}</td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <button
                            className="btn btn-info"
                            onClick={() => handleEdit(item)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i> Edit
                          </button>
                          <button className="btn btn-danger">
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                          <NavLink
                            to={`/main/single-car/${item.id}`}
                            className="btn btn-primary"
                          >
                            <span>
                              <i className="fa-solid fa-eye"></i>
                            </span>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
