1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementById gets element from Id.
getElementsByClassName gets element from Classes.
querySelector gets the first element that matches a CSS selector.
querySelectorAll gets all elements that match a CSS selector.

2.How do you create and insert a new element into the DOM?

To add a new element in the DOM, firstly make it with document.createElement("tag"). Then we can put text inside it using textContent and give it an id or class . Then pick a parent element in the page using getElementById or querySelector. Finally, insert our new element using appendChild() to put it at the end, prepend() to put it at the beginning, or insertBefore() to put it before another element.

3.What is Event Bubbling and how does it work?
Event Bubbling is when an event, like a click, starts at the element you interact with and then automatically moves up through its parent elements in the DOM, triggering any event listeners on those parents as it goes. For example, if we click a button inside a div, the click event first happens on the button, then bubbles up to the div, then to its parent, and so on, unless we stop it with event.stopPropagation(). In simple terms, the event “bubbles up” from the child to its ancestors.

4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is when we put a single event listener on a parent element to handle events for all its child elements. This way, we don’t need to add separate listeners to each child, and it even works for new elements added later. It’s useful because it saves memory, makes the code simpler, and works for dynamic elements. 

5.preventDefault() stops the browser from doing its normal action (like opening a link or submitting a form), while stopPropagation() stops the event from going up to parent elements and triggering their event listeners.