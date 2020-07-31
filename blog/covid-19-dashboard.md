---
slug: covid-dashboard
date: 2020-07-31T20:29:39.104Z
title: COVID-19 Dashboard
---
[Check out the JOEVID-19 dashboard here.](http://joevid-19.netlify.com/)

## Inspiration

I, like many others, felt overwhelmed by the inundation of information surrounding COVID-19. As a result, I had a strong desire to filter out the [signal from the noise.](https://conceptually.org/concepts/signal-and-noise) The result is a relatively simple React dashboard based on the design of a [Frontend Mentor challenge.](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H)

## Features

My dashboard had three key requirements: a light/dark mode toggle, a day of the week indicator, and an up-to-date panel of COVID-19 related data. The light/dark toggle was easy to implement, as I had done something similar in a [previous challenge](https://flaggy-but-one.netlify.com/) from Frontend Mentor.

While the day of the week indicator may seem silly, working-from-home and practicing social distancing have eroded the distinction between days for many of us. As a bonus, I added a small component that notifies the visitor whether it’s time for a coffee or time for a beer. (Coffee before 5pm, beer after)

Finding an up-to-date data source was incredibly easy, thanks to the team over at [www.covidtracking.com](http://www.covidtracking.com). Updated daily, their data comes from, “state/district/territory public health authorities—or, occasionally, from trusted news reporting, official press conferences, or (very occasionally) tweets or Facebook updates from state public health authorities or governors.”

## Challenges

The biggest and most frustrating challenge I encountered while creating this dashboard was consistently styling the `<select>` element across all browsers. Firefox, Chrome, and Safari each applied their own styles to the select (dropdown) element and I could not figure out how to solve the problem.

![](http://tekjoe.dev/wp-content/uploads/2020/04/safari-select-1024x329.png)

`<select>` element, Safari styling applied

![](http://tekjoe.dev/wp-content/uploads/2020/04/chrome-select-1024x299.png)

`<select>` element, Chrome styling applied

![](http://tekjoe.dev/wp-content/uploads/2020/04/firefox-select-1024x359.png)

`<select>` element, Firefox styling applied

After consulting with my web developer friends (Hi, Ted 👋🏼), I eventually found my way to an [article by Ben Nadel.](https://www.bennadel.com/blog/3776-effortless-custom-form-input-styling-with-webkit-appearance-none.htm?site-photo=321) The key was setting `-webkit-appearance` to `none`. This small change overrode each browsers’ default `<select>` element styling with my own.

```css

```

![](http://tekjoe.dev/wp-content/uploads/2020/04/Screen-Shot-2020-04-14-at-1.06.57-PM.png)

My own `<select>` element styling

I’m extremely happy with how everything turned out and I hope you find my dashboard project helpful. If you have any questions about this project, please hit me up through [email](mailto:joe@tekjoe.org) or [social media](https://twitter.com/_tekjoe).