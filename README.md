# Notes Diary

A simple Angular application created to practice **Services**, **Dependency Injection**, **Component Communication**, and **TypeScript fundamentals**.

---

## About The Project

Notes Diary is a small note-taking application where users can:

* Create notes
* View saved notes
* Delete notes
* Switch between light and dark themes
* Track application events through a logging system

The main purpose of this project was not to build a production-ready application but to gain a deeper understanding of how Angular services work and how data can be shared across different parts of an application using Dependency Injection.

---

## Features

### Note Management

* Add new notes
* Display existing notes
* Delete notes
* Store note information using a TypeScript interface

### Theme Preferences

* Light Theme
* Dark Theme
* User preference management through a dedicated service

### Logging System

* Automatic logging when notes are created
* Automatic logging when notes are deleted
* Authentication event logging
* Timestamped log messages

### Authentication Simulation

* Mock authentication service
* Demonstrates service-to-service and component-to-service interactions

### Custom Pipe

* TruncatePipe for shortening long log messages in the UI

---

## Technologies Used

* Angular
* TypeScript
* HTML
* CSS
* Dependency Injection
* Angular Services
* Angular Lifecycle Hooks
* Custom Pipes

---

## Project Structure

```text
src/
│
├── app.component
├── auth.service
├── logger.service
├── note.service
├── user-preferences.service
│
├── note-create/
│   ├── note-create.component
│
├── note-list/
│   ├── note-list.component
│
├── note.interface.ts
└── truncate.pipe.ts
```

---

## Concepts Practiced

During this project I practiced:

* Creating Angular services using @Injectable
* Root-level service providers
* Component-level service providers
* Service injection with inject()
* Service injection into other services
* Dependency Injection hierarchy
* TypeScript interfaces
* Lifecycle hooks (OnInit, DoCheck)
* State management through services
* Custom Angular pipes
* Component communication through shared services

---

## What I Learned

Before building this project, I understood the basic idea of Angular services, but I did not fully understand how Angular creates and shares service instances.

This project helped me better understand:

* The difference between root and component providers
* Why services are useful for sharing data
* How Angular's injector hierarchy works
* How Dependency Injection reduces coupling between components
* Why returning copies of arrays is safer than exposing original references
* How services can communicate with each other

One of the most valuable lessons was understanding that services are not just places to store code. They help separate responsibilities and make applications easier to maintain and scale.

---

## Personal Reflection

This project took me longer than I originally expected, but that turned out to be a good thing.

When I started, my goal was simply to make the application work. As I progressed, I realized that I was much more interested in understanding *why* things worked than just reaching the final result. Because of that, I often stopped and spent time exploring individual concepts before moving on.

The biggest challenge for me was understanding Angular services and Dependency Injection. At first, I could follow examples, but I did not always understand where service instances came from, why some services were shared across the entire application, and why others could exist separately inside components. After experimenting with different provider scopes and rebuilding parts of the project myself, those concepts finally started to make sense.

One thing I noticed while working on this project is that Angular often feels complicated until the pieces begin connecting together. Components, services, lifecycle hooks, interfaces, pipes, and dependency injection initially looked like separate topics. During this project, I started seeing how they work together to form a complete application.

The logging functionality was probably my favorite part of the project. It is a small feature, but it clearly demonstrated how different parts of an application can communicate through shared services without being tightly connected to each other. That was one of the moments where Angular started feeling less like a collection of rules and more like a system with a purpose.

Another lesson I learned is that there is a big difference between completing a tutorial and truly understanding the code. I deliberately spent time revisiting concepts, asking questions, rebuilding features, and experimenting with different solutions. Although that slowed me down, it helped me gain much more confidence in what I was learning.

Looking back, this project is not technically complex, but it represents an important milestone in my Angular journey. It was one of the first projects where I focused on understanding every file, every service, and every major decision in the codebase instead of simply making the application run.

The final result is a simple Notes Diary application, but for me the most valuable outcome was the deeper understanding of Angular fundamentals that I gained while building it.

---

## Future Improvements

Possible future enhancements:

* Local Storage persistence
* Edit existing notes
* Search functionality
* Note categories
* Angular Routing
* Backend API integration
* Real authentication
* Unit testing
* Responsive mobile-first redesign

---

## Author

Created by Samuel Liska as part of my Angular learning journey.

This project represents not only a finished application but also the process of learning, experimenting, making mistakes, fixing them, and gradually understanding Angular in greater depth.
