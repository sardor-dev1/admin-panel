import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const UserModal = (props) => {
  const { cars, setCars, toggle, currentCar, open } = props;

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    color: "",
    year: "",
    brand: "",
    action: "",
  });

  useEffect(() => {
    if (currentCar) {
      setForm(currentCar);
    } else {
      setForm({
        id: "",
        name: "",
        price: "",
        color: "",
        year: "",
        brand: "",
        action: "",
      });
    }
  }, [currentCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      const updatedCars = cars.map((car) => (car.id === form.id ? form : car));
      setCars(updatedCars);
    } else {
      setCars([...cars, { ...form, id: new Date().getTime().toString() }]);
    }
    toggle();
  };

  return (
    <Dialog open={open} onClose={toggle}>
      <DialogTitle>{form.id ? "Edit Car" : "Add Car"}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} id="submit">
          <TextField
            onChange={handleChange}
            value={form.name}
            type="text"
            label="Name"
            name="name"
            fullWidth
            margin="dense"
          />
          <TextField
            onChange={handleChange}
            value={form.price}
            type="number"
            label="Price"
            name="price"
            fullWidth
            margin="dense"
          />
          <TextField
            onChange={handleChange}
            value={form.year}
            type="date"
            label="Year"
            name="year"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            onChange={handleChange}
            value={form.color}
            type="text"
            label="Color"
            name="color"
            fullWidth
            margin="dense"
          />
          <TextField
            onChange={handleChange}
            value={form.brand}
            type="text"
            label="Brand"
            name="brand"
            fullWidth
            margin="dense"
          />
          <TextField
            onChange={handleChange}
            value={form.action}
            type="number"
            label="Action"
            name="action"
            fullWidth
            margin="dense"
          />
        </form>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={toggle} color="secondary">
          Cancel
        </Button> */}
        <Button onClick={toggle} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button variant="contained" type="submit" form="submit" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;
