import { useState } from "react";
import { Rating } from "@mui/material";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  // const db = getFirestore(app);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rating: null,
    likedMost: "",
    improvementSuggestions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: newValue,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData.firstName || !formData.lastName || !formData.email) {
  //     alert("Please fill in the mandatory fields.");
  //     return;
  //   }

  //   console.log(formData);
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     rating: null,
  //     likedMost: "",
  //     improvementSuggestions: "",
  //   });
  // };

  //new submit function tackle with database

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in the mandatory fields.");
      return;
    }

    try {
      await addDoc(collection(db, "feedback"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        rating: formData.rating,
        likedMost: formData.likedMost,
        improvementSuggestions: formData.improvementSuggestions,
        timestamp: new Date(),
      });

      console.log("Feedback data sent to Firestore");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        rating: null,
        likedMost: "",
        improvementSuggestions: "",
      });
    } catch (error) {
      console.error("Error sending feedback: ", error);
    }
  };

  return (
    <div className="GiveFeedback-Form gapM">
      <form onSubmit={handleSubmit}>
        <div className="row-feedback block">
          {/* <h1 className="title-form">Fill the form </h1> */}
          <label className="label-group ">
            <p className="par">First Name</p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label className="label-group ">
            <p className="par">Last Name</p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <br />
        <div className="row-feedback">
          <label className="label-group ">
            <p className="par"> Email </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label className="label-group ">
            <p className="par"> Rate Our Services</p>
            <Rating
              className="MuiRating-root "
              name="rating"
              value={formData.rating}
              onChange={(event, newValue) => handleRatingChange(newValue)}
            />
          </label>
        </div>

        <br />

        <div className="textarea-container">
          <label className="label-group ">
            <p className="par"> What did you like best?</p>

            <textarea
              name="likedMost"
              value={formData.likedMost}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="label-group ">
            <p className="par"> How can we improve?</p>
            <textarea
              name="improvementSuggestions"
              value={formData.improvementSuggestions}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div className="btn-container">
          <button type="submit">Send Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;

// import { useState } from "react";
// import { Rating } from "@mui/material";
// import "./FeedbackForm.css";

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     rating: null,
//     likedMost: "",
//     improvementSuggestions: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleRatingChange = (newValue) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       rating: newValue,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.firstName || !formData.lastName || !formData.email) {
//       alert("Please fill in the mandatory fields.");
//       return;
//     }

//     console.log(formData);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       rating: null,
//       likedMost: "",
//       improvementSuggestions: "",
//     });
//   };

//   return (
//     <div className="GiveFeedback-Form">
//       <form onSubmit={handleSubmit}>
//         <div className="row-feedback">
//           <label className="label-group ">
//             First Name
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />
//           <label className="label-group ">
//             Last Name
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </label>
//         </div>
//         <br />
//         <div className="row-feedback">
//           <label className="label-group ">
//             Email
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <br />

//           <label className="label-group ">
//             Rate Our Services
//             <Rating
//               className="MuiRating-root "
//               name="rating"
//               value={formData.rating}
//               onChange={(event, newValue) => handleRatingChange(newValue)}
//             />
//           </label>
//         </div>

//         <br />

//         <div  className = "textarea-container">
//         <label  className="label-group " >
//           What did you like best?
//           <textarea
//             name="likedMost"
//             value={formData.likedMost}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label className="label-group ">
//           How can we improve?

//             <textarea
//               name="improvementSuggestions"
//               value={formData.improvementSuggestions}
//               onChange={handleChange}
//             />

//         </label>
//         </div>
//         <br />
//         <div className="btn-container">
//           <button type="submit">Send Feedback</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;
