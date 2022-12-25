### 2022.12.26
[Coding]

After updating the API from the backend, the data is much more clean and easy to handle.
- Update the data from API
- Add fallback empty space for leaders name on card
- truncate the event name on card

The update of styles are trying to maintain the same card size in all situation. Like when the event name is too long and wrap to an new line, or the leader name is empty which shrink the height. So that we can prevent the above cases.

---

### 2022.12.22
[Coding]

Shifting the event card data from dummy data to API calls, update the subheader on the carousel and an extra blur layer on banner.

---

### 2022.12.18
[Design]

Designs for All Event Page and Event Detail Page
<details>
  <summary>showcase / screenshot</summary>
  
  <p align="center">
    <img src="https://user-images.githubusercontent.com/82365010/208307955-e1ed3685-c903-4ded-b383-3624b7faccf9.png">
    <img src="https://user-images.githubusercontent.com/82365010/208307973-7cb233ca-3357-4cd3-8b1a-f313efe752e8.png">
  </p>
</details>

---

### 2022.12.17
[Coding]

Styling Event Card and Add Mobile Menu:
- Using Image component from nextjs (auto compress the size of images)
- Customize the blur loading effect for Event Card image
- Create Pop up modal for mobile menu

---

### 2022.12.16
[Coding]

Styling and Refactoring:
- Date Tag on the Event Card
- Restructure the Images folder into more well organized
- Footer Section for both desktop and mobile

---

### 2022.12.15
[Coding]

Finish the following:
- Event Section for both theme
- Event Card and Styling
- Contact Us Section for both theme
- Animation for both Event and Contact Us Section

TODO
> The Homepage is almost done, the footer is not yet created but not in a hurry. Will focusing on the dynamic routing for the event data first. A base route for all the event cards, and a dynamic event detail page for correcsponding event ID.
- Dynamic Routing
- Event Detail Page Design
- Footer Section

---

### 2022.12.14
[Coding]

Done some minor adjustment, styling and animation:
- Navigation Bar on different screen sizes
- Add Watermark on text-based section
- Also the dark mode version of the watermark
- Add a light bulb on mobile screen for theme toggle
- Animated the light bulb, pull to toggle
- Fix animation bug, probably having a large x, y value will lead to flickering

TODO
> The Event section need to be done, waiting for the backend to show up. Before that, will be using some dummy data first.
- Event Cards
- Animations for the rest of the section

---

### 2022.12.13
[Coding]

Staring with Next.js starter command w/ `npx create-next-app@latest` and build up many things as follow:
- Navigation Bar 
- Light, Dark Model toggle
- Hero Section / Carousel Section
- Progress Bar goes by time integrated into the carousel section
- 3 Title-Description pair sections
- Most of them of now animated with Framer Motion
- Mobile Responsive

TODO
> Still got quite a lot to do with, the navigation bar is now only contain the logo and theme toggler, could add more links into it.
- Navigation Bar on Desktop
- Event Cards Section
- Social Media Section
- Footer
- Other routes are needed but not urgent

---

### 2022.12.12
[Design]

Turn Light Mode in Mobile Version to Dark Mode

[Link for prototype](https://www.figma.com/proto/9ZtJNV3Bs1El4e9A2OqxH3/CPS-Website?page-id=281%3A2&node-id=281%3A3&viewport=771%2C2649%2C1.15&scaling=min-zoom)

<details>
  <summary>showcase / screenshot</summary>
  
  <p align="center">
    <img src="https://user-images.githubusercontent.com/82365010/207060264-6cc238c3-7049-45c2-b635-e602282b31fc.png">
  </p>
</details>

---

### 2022.12.3
[Design]

Turn Desktop version into Mobile version

[Link for prototype](https://www.figma.com/proto/9ZtJNV3Bs1El4e9A2OqxH3/CPS-Website?page-id=226%3A199&node-id=226%3A200&viewport=782%2C513%2C0.19&scaling=min-zoom)

<details>
  <summary>showcase / screenshot</summary>
  
  <p align="center">
    <img src="https://user-images.githubusercontent.com/82365010/205448451-aed91288-80c5-4f18-bc0a-3f0e448c6461.png">
  </p>
</details>

---

### 2022.11.16
[Design]

Home Page - Desktop
- Modify the Navigation bar
- Join Us Section
- Dark Mode

[Link](https://www.figma.com/proto/9ZtJNV3Bs1El4e9A2OqxH3/CPS-Website?page-id=85%3A61&node-id=85%3A62&viewport=458%2C407%2C0.2&scaling=min-zoom) to the figma design.

<details>
  <summary>showcase / screenshot</summary>

![HomePage-desktop-dark](https://user-images.githubusercontent.com/82365010/202089186-4f0a906c-6a90-4e9d-8b92-d3889f496bc3.png)

</details>

---

### 2022.11.13
[Design]

Home Page - Desktop
- Header, Navigation bar
- Hero Section with carousel
- Introduction Section
- Recent Activites Section
- Our Core Value
- Social Media Section
- Footer

[Link](https://www.figma.com/file/9ZtJNV3Bs1El4e9A2OqxH3/CPS-Website?node-id=1%3A41&t=PYeIcZGmrOTEChjH-1) to the figma design.

<details>
  <summary>showcase / screenshot</summary>
  
![HomePage-desktop](https://user-images.githubusercontent.com/82365010/201516942-0e4df0f1-eafe-4ee0-b1b6-796ff0538904.png)

</details>

---
