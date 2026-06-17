# Notes Diary - Learning Notes

## Project Goal

The goal of this project was to practice Angular Services and Dependency Injection while building a simple Notes Diary application.

The application allows users to:

* Create notes
* Display notes
* Delete notes
* Switch between light and dark themes
* View application logs

---

# Key Concepts Learned

## What is a Service?

A service is a TypeScript class that contains reusable business logic and data management.

Instead of placing all logic inside components, Angular encourages moving reusable logic into services.

Example from this project:

```ts
export class NoteService {
  private notes: Note[] = [];

  addNote(note: Note): void {
    this.notes.push(note);
  }
}
```

Benefits:

* Better code organization
* Reusability
* Easier testing
* Separation of responsibilities

---

## What is Dependency Injection (DI)?

Dependency Injection is Angular's mechanism for providing objects to classes that need them.

Instead of creating objects manually:

```ts
const noteService = new NoteService();
```

Angular creates and manages service instances automatically:

```ts
private noteService = inject(NoteService);
```

Simple definition:

> Dependency Injection is a design pattern where a class receives its dependencies from an external system instead of creating them itself.

---

## Why is Dependency Injection Useful?

Without DI:

```ts
export class NoteComponent {
  private noteService = new NoteService();
}
```

Problems:

* Tight coupling
* Harder testing
* Difficult maintenance

With DI:

```ts
export class NoteComponent {
  private noteService = inject(NoteService);
}
```

Benefits:

* Loose coupling
* Easier testing
* Shared instances
* Better scalability

---

## What is @Injectable?

The @Injectable decorator tells Angular that a class can participate in the Dependency Injection system.

Example:

```ts
@Injectable({
  providedIn: 'root'
})
export class NoteService {}
```

Without @Injectable Angular cannot properly register the service.

---

## providedIn: 'root'

This creates one shared instance of a service for the entire application.

Example:

```ts
@Injectable({
  providedIn: 'root'
})
export class LoggerService {}
```

Meaning:

```text
Entire Application
        │
        ▼
 One LoggerService Instance
```

Every component receives the same instance.

---

## Component Providers

A service can also be provided directly inside a component.

Example:

```ts
@Component({
  providers: [AuthService]
})
```

Meaning:

```text
Component A
 └── AuthService Instance #1

Component B
 └── AuthService Instance #2
```

Each component receives its own service instance.

---

## Injector Hierarchy

One of the most important concepts learned during this project.

Angular stores services inside injectors.

When Angular cannot find a service:

1. Search current component injector
2. Move to parent injector
3. Move higher
4. Continue until root injector

This process is called:

> Injector Bubbling

Example:

```text
AppComponent
    │
    ▼
ContentComponent
    │
    ▼
ChildComponent
```

If ChildComponent requests LoggerService:

```ts
private loggerService = inject(LoggerService);
```

Angular searches:

```text
Child
  ↓
Content
  ↓
App
  ↓
Root Injector
```

First provider found wins.

---

## Service Injection Into Another Service

One thing that felt strange initially was injecting a service into another service.

Example:

```ts
export class NoteService {
  private loggerService = inject(LoggerService);
}
```

This allows NoteService to log actions whenever notes are added or deleted.

Benefits:

* Better separation of responsibilities
* Cleaner code
* Reusable functionality

---

# TypeScript Concepts

## Interface

Used to define the shape of an object.

Example:

```ts
export interface Note {
  content: string;
  date: string;
}
```

Every note must contain:

* content
* date

---

## Getter

Used to expose internal data safely.

Example:

```ts
get messages() {
  return [...this.logMessages];
}
```

Accessed as:

```ts
loggerService.messages
```

not:

```ts
loggerService.messages()
```

---

## Returning Copies

One concept I spent time understanding:

```ts
return [...this.notes];
```

This returns a copy of the array.

Why?

Without a copy:

```ts
return this.notes;
```

External code could modify internal service data directly.

Returning copies protects service state.

---

# Angular Lifecycle Hooks

## OnInit

Runs once after component creation.

Example:

```ts
ngOnInit(): void {}
```

Used for:

* Initial data loading
* Authentication checks
* Setup operations

---

## DoCheck

Runs during every change detection cycle.

Example:

```ts
ngDoCheck(): void {}
```

Used in this project to keep logs updated.

---

# Custom Pipes

## TruncatePipe

Purpose:

Shorten long text.

Example:

```ts
{{ message | truncate:50 }}
```

Input:

```text
This is a very long message...
```

Output:

```text
This is a very long message...
```

(truncated after 50 characters)

---

# Methods That Required Extra Attention

## splice()

Used for deleting items from arrays.

Example:

```ts
this.notes.splice(index, 1);
```

Meaning:

* Start at index
* Remove 1 item

Example:

```ts
['A', 'B', 'C']
```

After:

```ts
splice(1, 1)
```

Result:

```ts
['A', 'C']
```

---

## slice()

Used for creating partial copies.

Example:

```ts
text.slice(0, 30);
```

Returns:

```text
First 30 characters
```

Used inside TruncatePipe.

---

# Questions I Asked Myself During This Project

* Why do services exist?
* Why not keep everything inside components?
* What is Dependency Injection actually doing?
* Where does Angular find service instances?
* Why use root providers?
* Why use component providers?
* Why inject services into other services?
* Why return copies of arrays?
* Why use interfaces?
* Why use lifecycle hooks?
* What problem do pipes solve?
* How does Injector Bubbling work?

---

# Biggest Takeaway

The most important thing I learned from this project is that Angular is not just a collection of components.

Angular applications are built around responsibilities:

* Components display data
* Services manage logic and state
* Dependency Injection connects everything together

Once I started understanding that separation, Angular became much easier to reason about and much less "magical".
