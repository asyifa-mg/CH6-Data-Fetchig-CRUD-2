import Doctor from "../models/DoctorModel.js";

export const getDoctors = async (req, res) => {
  try {
    const response = await Doctor.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const response = await Doctor.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createDoctors = async (req, res) => {
  try {
    await Doctor.create(req.body);
    res.status(201).json({ msg: "Doctors Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDoctors = async (req, res) => {
  try {
    await Doctor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Doctors data has been successfully updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDoctors = async (req, res) => {
  try {
    await Doctor.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ msg: "Doctor's data has been successfully deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
