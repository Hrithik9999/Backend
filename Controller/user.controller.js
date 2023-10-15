const contact = require("../Model/user.schema");

// create a contact function

exports.contactAddFunction = async (req, res) => {
  const { course_id, img,course_name,instructor_name,course_description,enrolled_students,number_of_lectures,duration, course_description_points,curriculum,faq } = req.body;

  try {
    const contactData = await contact.create({ course_id, img,course_name,instructor_name,course_description,enrolled_students,number_of_lectures,duration, course_description_points,curriculum,faq });
    res.status(200).json(contactData);
  } catch (error) {
    console.log(error);
  }
};

// get a contact function

exports.contactGetFunction = async (req, res) => {
  try {
    const contactData = await contact.find();
    res.status(200).json(contactData);
  } catch (error) {
    console.log(error);
  }
};

// get a single contact function

exports.contactGetSingleFunction = async (req, res) => {
  const { id } = req.params;
  try {
    const contactData = await contact.findById({ _id: id });
    res.status(200).json(contactData);
  } catch (error) {
    console.log(error);
  }
};

// update a contact function

exports.contactUpdateFunction = async (req, res) => {
  const { id } = req.params;

  try {
    const { course_id, img,course_name,instructor_name,course_description,enrolled_students,number_of_lectures,duration, course_description_points, curriculum, faq} = req.body;
    const contactData = await contact.findByIdAndUpdate(
      id,
      { course_id, img,course_name,instructor_name,course_description,enrolled_students,number_of_lectures,duration, course_description_points, curriculum, faq },
      { new: true }
    );
    await contactData.save();
    res.status(200).json(contactData);
  } catch (error) {
    console.log(error);
  }
};

// delete a contact function

exports.contactDeleteFunction = async (req, res) => {
  const { id } = req.params;
  try {
    const contactData = await contact.findByIdAndDelete(id);
    res.status(200).json(contactData);
  } catch (error) {
    console.log(error);
  }
};
