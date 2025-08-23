---
title: "Use polymorphism to ditch the legacyBehavior prop in Next.js"
description: "asdad"
date: 2025-08-23T14:34:08.832Z
preview: ""
draft: false
tags: ["Next.js", "React", "Polymorphism"]
categories: []
image: "/post_images/pexels-diego-madrigal-162471-668424.jpg"
type: ""
excerpt: You can't use anymore the legacyBehavior prop with the Link components and you can use the polymorphic component pattern to achieve a clean solution.
---

TL;DR: [Use polymorphism](#polymorphism-at-the-rescue)

## A small history about the Link component

In the old days of Next.js 12, the Link component usage was a bit different from how is it today. You needed to wrap your `<a>` tag with his `<Link>` component and move the `href` attribute to the `Link`. Resulting in something like this:

```jsx
// The Next.js 12 way
<Link href="/">
  <a>The link</a>
</Link>
```

Today it looks like a nonsense, but we could assume that some important reason was behind this decission. And at least, it was easy to implement.

But if you have something more complex, like a component with styles that should be reutilized, for example in a navigation bar, we needed to do somegthing even weirder. The component needs to use the `forwardRef` method and we still need to wrap each instance with the `<Link href="/">` component, but this time with one difference: a new prop is needed. You should specify that you want to pass the `href` prop to your component. **What a mess**.

```jsx /passHref/ /forwardRef/
// Still the Next.js 12 way
const Button = React.forwardRef(({ href, children }, ref) => {
  return (
    <a ref={ref} href={href} className="bg-black text-white rounded px-2 py-1">
      {children}
    </a>
  );
});

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/" passHref>
          <Button>One page</Button>
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          <Button href="/">Another page</Button>
        </Link>
      </li>
    </ul>
  );
});
```

When Next.js 13 was released, by the end of 2022, they released a new approach. You don't need to use the nested `<a>` inside the `<Link>` anymore. Much more clean of course. But what happens with the custom component that we already have? The component can stay as it was, but since the behavior was outdated, they prepared a new prop to maintain the same behavior. This prop is called `legacyBehavior`, and the usage is this:

```jsx /legacyBehavior/
// Next.js 13 - 15 way
<Link href="/" legacyBehavior passHref>
  <Button>One page</Button>
</Link>
```

They wanted to simplify, but they made it actually worse in some scenarios because you need even one more prop. If you use [styled components](https://styled-components.com/), if you are using another libraries, or you have your custom components. You're getting in troubles.

The legacyBehavior prop was intended as a transition thing, like: we allow you to upgrade to Next.js 13, but keep in mind that this behavior should change.

On further releases, a warning about the `legacyBehavior` prop was marked as deprecated, and now with the release of Next 16 it would dissappear completely. Hope you have updated everything in your codebase.

Then... what's the solution with our code?

## Polymorphism at the rescue

Our custom button can be changed to something like this:

```jsx
const ButtonA = ({ as: Component = "button", children, ...props }) => {
  return (
    <Component href={href} className="bg-black text-white rounded px-2 py-1">
      {children}
    </Component>
  );
});
```

The differences are that we no longer need the `forwardRef` usage and now our component doesn't render an `<a>` tag, renders whatever we need.

We need a button?

```jsx
// button is the default value
<Button onClick={/** do whatever **/}>
  Do things
</Button>
```

We need a link that looks like a button?

```jsx
<Button as="a" href="/somewhere">
  Go somewhere
</Button>
```

But what about Next.js? We can do the same

```jsx
// Next.js 16 way (required since 16, but actually allowed since 13)
import Link from "next/link";
// ...
<Button as={Link} href="/somewhere">
  Go somewhere
</Button>;
```

[Photo by Diego Madrigal on Pexels](https://www.pexels.com/es-es/foto/mariposa-negra-roja-y-blanca-en-la-foto-de-primer-plano-668424/)
