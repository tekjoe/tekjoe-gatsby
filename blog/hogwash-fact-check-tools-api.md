---
slug: hogwash-app
date: 2020-08-01T14:37:19.089Z
title: Hogwash - Fact Check Tools API
---
Hydroxychloroquine. 5G towers. Disinfectant injections.

There’s a lot of misinformation bouncing around social media, traditional media outlets, and old-fashioned social circles. Everyone’s entitled to their own opinion, but we should all try a little bit harder to filter and fact check the information we consume.

**[Enter Hogwash.](https://hogwash.netlify.app/)**

Hogwash is another [Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G) inspired React JS project. Once again, I took the completed design of [an earlier project](https://shawtay.netlify.app/) and retrofitted with my own functionality. During my brainstorming period, I came across Google’s Fact Check Tools. You may have already seen it in action on Google’s search results page.

![Fact check API in action](https://tekjoe.dev/wp-content/uploads/2020/04/Screen-Shot-2020-04-30-at-10.43.44-AM.png)

Google’s documentation made it easy to get up and running with very few hiccups. The only issue I came across was the inability to render an image along with the text results. I remember seeing an example result that included an `imageUrl`, or something to that effect, but I wasn’t able to get that to work in my code.

Aside from learning how to use the Fact Check API, I was motivated to get a better understanding of the well documented and popular `react-spring` animation library. React-spring’s `useTrail` hook made it incredibly easy to stagger the entrance animation of each search result – in this case, a card-like component. I’m excited to see how I can implement `react-spring` in future projects for my clients.