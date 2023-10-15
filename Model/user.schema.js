const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({

  course_id: {
    type: Number,
    require: true,
  },
  
  img: {
    type: String,
    require: true,
  },
  course_name: {
    type: String,
    require: true,
  },
  instructor_name: {
    type: String,
    require: true,
  },
  course_description: {
    type: String,
    require: true,
  },
  course_description_points: {
    type: [String], 
    required: true,
  },
  enrolled_students: {
    type: Number,
    require: true,
  },
  number_of_lectures: {
    type: Number,
    require: true,
  },
  duration: {
    type: String,
    require: true,
  },
  curriculum: {
    type: [
      {
        module: {
          type: String,
          required: true,
        },
        topics: {
          type: [String],
          required: true,
        },
      },
    ],
    required: true,
  },
  faq: {
    type: [
      {
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
 

});

const user = new mongoose.model("user", user_schema);

module.exports = user;
// const {
//   img,
  // instructor_name,
  // course_description,
  // price,
  // enrolled_students,
  // number_of_lectures,
  // duration,
  // faq,
  // curriculum,course_name
// } = req.body;