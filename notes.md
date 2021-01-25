# Final thoughts:

1. This was a challenging task with the way the design was given. Mobile-first with no designs for any other screens sizes, proved an creative problem of how to best represent the data to the user.

2. I chose to keep the side effects away from the UI component and only have them rendering the data, because I feel from a design POV that I could utililize things such as lazyloading & skeletal-loading instead of performing a re-render of the page eachtime data has been fetched. I could also look at things like memoizing data, if there's no change. Having a single point of entry for data-flow. Not everything has to be a component.

3. Given more time I would have updated the styling, and looked at refactoring common things like button styling to a main styled component that could be interpolated and built upon for different use cases - less repetition especially incases of the QTY buttons.

4. Adding more tests such as api tests to make sure the expected data is being return from the server but also more unit tests, Header component for example could be tested to see if the cart updates when the right redux dispatch has been made

5. Could have improved on styling with the overlapping of colours with splitting of background colours between the image & product name

6. Add loading UI component but also errorBoundaries to handle any errors possibly caused by data not being retrived from th API & other things

7. Type-safety!! Definitely would have added something like propTypes or TypeScript to this project but I ultimately went for speed in terms of development

8. Maybe look at using some other pkg to persist redux state, as redux-persist seems to use non-serializable values

### Future features:

1. Add a way to remove items from the cart
2. Add sidebar or navbar dropdown to view what's in the cart
3. Closable sections for the bits of information being presented to the user - mobile & tablet view would benefit from this
4. Improve styling on the tbalet & desktop view with the product pricing section in particular. As I feel more could have been done to effectively utilise the space