When I started developing in React and Gatsby, the most exciting thing to me was that it would be easier to write javascript page transitions than it had been previously. I quickly discovered that there was no easy way to do page transitions in Gatsby though, so I created `gatsby-plugin-transition-link` to make it not only possible but easy.
TransitionLink is a simple way of describing a page transition via props on a Link component. For both entering and exiting pages you can specify a number of timing values, pass state to both pages, and trigger a function for each.

Check out the TransitionLink docs site for examples.

## The story

What I really wanted to do was create one of those beautiful awwwards sites we all know. Because it quickly becomes complex to manage what a transition should look like to and from specific sets of pages, I've often settled on using a simple fade transition between all pages. This has always been a disappointment and left me feeling limited.

I needed an easy way to specify when and where a page transition should happen, and only when coming from or going to other specific pages, and I needed an easy way to manage that. I wanted the freedom to build anything I could dream up without spending a few hundred hours in the process!

After hashing it out on a few gatsby sites I still could only find unsatisfactory solutions. First I thought of setting up an object that I could check the current pathname against and derive my transitions from. I almost started building it but the thought of how overwhelming and downright ugly this would be in production stopped me. No thanks! Next I played with setting transition data on gatsby templates and pages and then triggering the current page transition based on that data from inside a persistent layout component.
Though this worked, pages could only have a single exit and entry transition no matter where the user was coming from or going to. This too was not the solution.

After having spent a couple weeks of evenings after work hammering away at this problem, my obsession was still going strong. Laying in bed one night after coding for too long it suddenly hit me: I've been looking for a Link between two pages which determines what their shared transition should look like. ...a LINK! I had been looking for the simple page link that I'd been staring at and clicking the whole time. It'd been right in front of me all along.

Links are already the mediator between pages. They control the default browser page transition (an abrupt jump), of course they should specify which page transition will carry the user from one place to the next.

### Get started easy

Because I knew not everyone is as obsessed with creating beautiful page transitions as myself, I created another component called AniLink which wraps around TransitionLink to provide some default transitions. This component offers four transitions; paintDrip, swipe, cover, and fade. It's as simple as installing TransitionLink and then importing AniLink to your pages.

```jsx
<AniLink fade to="page-2">
  Go to Page 2
</AniLink>
<AniLink paintDrip to="page-3">
  Go to Page 3
</AniLink>
```

### Build your own transitions

To be honest, I'm hoping most people don't use AniLink. I'm at the very beginning of my journey into learning how to make nice looking animations on the web and, while AniLink could be better than nothing, you can create something much cooler that's unique to your project if you work on it a bit. I tried my best to make it as easy as possible to write your own transitions and here's a super simple example using TransitionLink and react-pose to fade between pages.

```jsx
// Your link
<TransitionLink to="page-2" exit={{ duration: 0.5 }}>
  Go to page 2
</TransitionLink>
```

```jsx
// Your pose
const Fade = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

...

// In a component that wraps your page contents
<PageWrapper>
// We're using the TransitionState component here to provide the current transition status to our pose
<TransitionState>
{({transitionStatus}) => (
    <Fade
        pose={
           ['entering', 'entered'].includes(transitionStatus)
           ? 'visible'
           : 'hidden'
        }>
        {props.children}
    </Fade>
)}
</TransitionState>
</PageWrapper>
```

You can then wrap your TransitionLink into a reusable component and use it throughout your project.

```jsx
<FadeLink to="/page-2>
  Go to page 2
</FadeLink>
```

The beauty of this is that if you decide a certain page requires something more complex than a simple fade, you can add more transitions as needed.

Here's an example of a more complicated TransitionLink using gsap to create a coloured ripple that moves outwards from the users mouse click and covers the whole page.

```jsx
<TransitionLink
  exit={{
    length: 0.6,
    trigger: ({ exit, e, node }) =>
      this.createRipple(exit, e, props.color, node),
  }}
  entry={{
    delay: 0.3,
    length: 0.6,
    trigger: ({ entry, node }) => this.slideIn(entry, node, 'left'),
  }}
  {...props}
>
  {props.children}
</TransitionLink>
```

The rest of the code would be a bit much to post here but you can check it out on the (TransitionLink github)[https://github.com/TylerBarnes/gatsby-plugin-transition-link/blob/master/src/AniLink/PaintDrip.js]

As you can see, TransitionLink offers quite a wide variety of control for page transitions! We're able to set the length, delay, state, and a trigger function for both entering and exiting pages.

### Components to help you out

In addition to TransitionLink and AniLink, we also have the TransitionState and TransitionPortal components.

TransitionState uses children as a function to pass the transition status of the page the component is used on. That means you can use it throughout your pages to make your components aware of when the page is transitioning! You can also use this component to pass any kind of state from TransitionLink to your components.

TransitionPortal is a React portal which allows you to position animation elements above both your exiting and entering pages. Sometimes you'll need to have something persist through the whole animation and some other page element will overlap it. Portals are great for solving that.

### Finally

I'm excited to see what the Gatsby community builds with TransitionLink. I'm sure you will make something amazing. Good luck transitioning and please send any unanswered questions or issues (my way)[https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc] and I'll help you out asap.

For more info on TransitionLink, AniLink, TransitionState, and TransitionPortal check the docs.

— Ty. B.

### Learn TransitionLink
