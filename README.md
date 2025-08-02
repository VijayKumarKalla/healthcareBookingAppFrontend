# HealthCare Appointment Booking App

This is a simple and responsive **Healthcare Appointment Booking Web Application** built using **React.js** and plain CSS. Users can view a list of doctors, check their availability, view individual doctor profiles, and book appointments. A “My Appointments” section is also included to track booked appointments.

---

## Features

-  **Search Functionality** to filter doctors by name and also with specialization
-  **Doctor Listing** with name, specialization, profile image, and availability
- **Doctor Profile Page** showing full details and a "Book Appointment" form
- **Book Appointment Form** with patient name, email, date & time inputs
-  Displays confirmation message after booking
- **My Appointments** section to view user’s submitted appointments
- **Routing** with React Router (`/` for listing, `/doctors/:id` for profile, `/not-found` fallback)
-  Fully **Responsive Design** using Flexbox
-  Fallback `NotFound` page for invalid URLs

---

## Tech Stack

- **Frontend:** React.js (Functional Components + Hooks)
- **Routing:** React Router DOM v6
- **State Management:** Local State with React Hooks
- **Styling:** Plain CSS (Responsive Design)
- **Data:** Mock JSON file (`doctors.json`)

---

##  Folder Structure

healthcare-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Header/
│ │ ├── DoctorList/
│ │ ├── DoctorCard/
│ │ ├── DoctorProfile/
│ │ ├── AppointmentForm/
│ │ ├── MyAppointments/
│ │ └── NotFound/
│ ├── data/
│ │ └── doctors.json
│ ├── utils/
│ │ └── getDoctorById.js
│ ├── App.js
│ └── index.js
├── README.md
└── package.json



---

##  Improvements (Given More Time)

- Add form validation for better UX (required fields, email format)
- Store appointments in localStorage or connect to a backend API
- Use TypeScript for better type safety
- Add loading and error states for fetching data
- Integrate a calendar/time picker UI for booking
- We can add a timer and alert system for user using backend
- We can also include the  doctors feedback , medication from the   doctor side.
- We can Add a doctor rating system from the patient/user side

---

##  Challenges Faced

- Ensuring **routing works properly** with dynamic doctor IDs.
- Maintaining **responsive layout** across screen sizes.
- Managing **form data and appointment state** in a clean way using hooks.
- Dynamically rendering content conditionally ,like empty appointments view.

---

##  Screenshots

|
| ![Home](https://drive.google.com/file/d/13lRzugVn8yqNZnMbO0350DBvqV0ffI1C/view?usp=sharing)

| ![Profile](https://drive.google.com/file/d/1cKNOJ-mSZapcXZfTvz0IBPlLK6ZD6HmZ/view?usp=drive_link) 

| ![Appointments](https://drive.google.com/file/d/1F4Vl5ioxBv6F0ooHVCmKeFtFH80oPVUf/view?usp=drive_link) |

| ![Confirmation](https://drive.google.com/file/d/1nw8W9Jz4jg18IJQZrfj5Ya-U9wR6Y4XE/view?usp=drive_link) |

---

## 🔧 Installation & Setup

1. Clone the repo
   bash
   git clone https://github.com/your-username/healthcare-app.git
   cd healthcare-app

