# The components folder

This folder contains all components such as UI primitives like **buttons**, **text inputs**, **select inputs**, **forms**, **modals**, etc.

Things that are small and not made up of other, smaller, components. We use these, for example, to build bigger, other reuseable components.

## Some examples

### Button

- This could have reuseable functionality, styles for all buttons or select styles based on state such as **hovering** or **clicked**.

### Text Input

- Similar to the **button** component.

### Form

- Similar to the **button** and **text input** component.

### Modal

- Similar to the **button**, **text input** and **form**

Again, anything that is small or pimitive would gets placed in here and is **NOT** made up of smaller components.

## Example of a component made up of smaller components

- Our **Delete Account Modal** could use any number of combination of examples above. For this reason we create a **ui** folder and place all primitive compoents _(components NOT made up of smaller components)_ inside of it to differentiate them. This helps keep things organized.
