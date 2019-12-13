1. What problem does the context API help solve?

Answer: context api helps solve the problem of not having to prop drill down every component to pass state only to the components that need to use that state.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Answer: actions are triggers that set off the reducers,
        reducers communicate with the store picking out what state that want changed,
        store is what holds the application state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Answer: Application State is when you pass down state from the parent to child through props,
        Component State is when you use a component to store state that changes over time.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Answer: Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action         Creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Answer: My favorite state management system is redux because I like how it scales for large applications and thats how i visualize my             self working with large code base.