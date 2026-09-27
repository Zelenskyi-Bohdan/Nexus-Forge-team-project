# 💍 Wedding Photographer Landing page

A modern responsive one-page website for a wedding photographer, developed as a team frontend project.

The website presents the photographer's services and portfolio, allows visitors to browse wedding photos by category, read customer testimonials, find answers to frequently asked questions, and send a booking inquiry through a contact form.

## ✨ Features

- 📱 Mobile-first responsive design
- 🧭 Smooth anchor navigation between page sections
- 🎨 Responsive layout for mobile, tablet, and desktop
- 📸 Dynamic portfolio loaded from a REST API
- 🏷️ Portfolio filtering by photo category
- ➕ Portfolio pagination with a **Show More** button
- 💬 Customer testimonials loaded from a REST API
- 🎞️ Interactive testimonials slider powered by **Swiper**
- ❓ FAQ accordion powered by **Accordion.js**
- 📩 Contact form with client-side validation
- ☎️ Phone number masking with **IMask**
- 🔄 Loading indicators for asynchronous requests
- 🔔 Error notifications with **iziToast**
- ✅ Success modal with the generated order number
- 🔒 Scroll locking while the modal is open
- 🎯 Modal closing via close button, backdrop, and `Escape`
- 🖼️ Responsive images with Retina (`1x` / `2x`) support
- 🔹 SVG icon sprite
- 🎯 Interactive hover and focus states

---

## 🛠️ Technologies

### Core

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- Vite

### Libraries

- [Axios](https://axios-http.com/) — HTTP requests
- [Swiper](https://swiperjs.com/) — testimonials slider
- [Accordion.js](https://www.npmjs.com/package/accordion-js) — FAQ accordion
- [IMask](https://imask.js.org/) — phone input masking
- [iziToast](https://izitoast.marcelodolza.com/) — notifications

### Other

- REST API
- SVG sprite
- Responsive images
- Mobile-first CSS architecture
- CSS media queries with `min-width`

---

## 📐 Responsive Design

The project follows a **Mobile First** approach.

Supported breakpoints:

| Device | Breakpoint |
| --- | --- |
| Mobile | `320px+` |
| Tablet | `768px+` |
| Desktop | `1440px+` |

The layout is designed to remain flexible on small mobile screens and progressively adapts to larger screen sizes.

---

## 📸 Portfolio

The portfolio content is loaded dynamically from the backend.

Users can:

1. View wedding photos loaded from the REST API.
2. Select a photo category.
3. Load photos for the selected category.
4. Load additional photos using the **Show More** button.
5. Continue loading photos until the available results are exhausted.
6. See a loading indicator while photos are being requested.

The portfolio uses:

```text
GET /categories
GET /wedding-photos
```

## 💬 Testimonials

Customer testimonials are loaded dynamically from the REST API and displayed as a horizontal slider using Swiper.

The slider supports:

- mouse interaction;
- touch interaction;
- keyboard navigation;
- previous / next controls;
- disabled states when the beginning or end of the list is reached.

API endpoint:

```text
GET /feedbacks
```

## 📩 Contact Form

The contact section contains:

- Name
- Phone
- Message
- **Let's Talk** submit button

### Validation

| Field | Requirements |
|----------|--------|
|`Name` | Required, 2–64 characters |
| `Phone` | Required, exactly 12 digits |
| `Message` | Optional, 5–256 characters when provided |

The phone number is formatted using **IMask**, while the value sent to the API contains only digits.

### Form submission

After successful validation:

```text
User submits the form
    ↓
Client-side validation
    ↓
Controls are disabled
    ↓
Loader is displayed
    ↓
POST /orders
    ↓
Success
    ↓
Form reset
    ↓
Success Modal
```

If the API request fails, the user receives an error notification.

## 🪟 Success Modal

After a successful order submission, the application displays a success modal containing:

* confirmation heading;
* responsive Retina-ready image;
* confirmation message;
* generated order number;
* SVG close button.

The modal can be closed by:

* clicking the close button;
* clicking the backdrop;
* pressing `Escape`.

While the modal is open, background page scrolling is disabled.

## 🔌 REST API

The project uses the Wedding Photographer REST API.

### API Documentation

>
> https://wedding-photographer.b.goit.study/api-docs/
>

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/categories` | Get portfolio categories |
| `GET` | `/wedding-photos` | Get wedding photos |
| `GET` | `/feedbacks` | Get customer testimonials |
| `POST` | `/orders` | Create a customer's order |

## 🧩 Page Structure

The website consists of the following sections:

```text
Header
├── Logo
├── Navigation
└── Book a Session

Hero
About
Benefits
Feedbacks
Portfolio
FAQ
Contacts
Footer
Success Modal
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

#### Clone the repository:

```bash
git clone git@github.com:Zelenskyi-Bohdan/Nexus-Forge-team-project.git
```

#### Navigate to the project directory:
```bash
cd <project-directory>
```

#### Install dependencies:
```bash
npm install
```

#### Run in development mode
```bash
npm run dev
```
Vite will start the development server and display the local URL in the terminal.

#### Build for production
```bash
npm run build
```

#### Preview the production build
```bash
npm run preview
```

## 📜 Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` |	Build the project for production |
| `npm run preview`	| Preview the production build |

## 🎯 Project Requirements

The project was developed according to the provided Wedding Photographer technical specification.

The implementation includes:

* Semantic HTML5 markup
* Mobile First responsive design
* Responsive layouts for mobile, tablet, and desktop
* REST API integration
* Dynamic portfolio content
* Portfolio category filtering
* Portfolio pagination
* Dynamic customer testimonials
* Swiper-based slider
* Accordion.js FAQ
* Client-side form validation
* Asynchronous request loading states
* API error handling
* Success Modal
* SVG sprite icons
* Responsive and Retina-ready images
* Interactive states for clickable elements

## 👥 Team Project

This project was developed collaboratively as part of a frontend development course.

### Team Members
[Zelenskyi Bohdan](https://github.com/Zelenskyi-Bohdan)
![Badge](https://img.shields.io/badge/Team_Lead-0969DA?style=flat-square)

[Hodun Illya](https://github.com/Lysdorf)
![Badge](https://img.shields.io/badge/Scrum_Master-0969DA?style=flat-square)

[Yakovenko Andrii](https://github.com/AndrewIAm)
![Badge](https://img.shields.io/badge/Developer-0969DA?style=flat-square)

[Yevdokymenko Vladyslav](https://github.com/vyevdokymenko)
![Badge](https://img.shields.io/badge/Developer-0969DA?style=flat-square)

[Davydiuk Pavlo](https://github.com/pasha-dav)
![Badge](https://img.shields.io/badge/Developer-0969DA?style=flat-square)

[Shalashnyi Hryhorii](https://github.com/orxen3-dot)
![Badge](https://img.shields.io/badge/Developer-0969DA?style=flat-square)

[Nechytailo Andrii](https://github.com/AndrNech)
![Badge](https://img.shields.io/badge/Developer-0969DA?style=flat-square)

[Horlovyi Volodymyr](https://github.com/abbalbisk)
![Badge](https://img.shields.io/badge/Developer-0969DA?style=flat-square)

[Lushchyk Dmytro](https://github.com/lushchik19-web)
![Badge](https://img.shields.io/badge/Developer-0969DA?style=flat-square)
