---
title: CryptoPoules
description: TBD

layout: default
---

<div class="homepage">
  <header class="homepage__header">
    <h1>{{ site.data.home.header.heading }}</h1>
    <p>{{ site.data.home.header.subHeading }}</p>
    <button>{{ site.data.home.header.cta }}</button>
  </header>
  <section class="homepage__intro">
    <h1>{{ site.data.home.intro.heading }}</h1>
    {{ site.data.home.intro.content | markdownify }}
    <button>{{ site.data.home.intro.cta }}</button>
  </section>
  <section class="homepage__convince">
    <h1>{{ site.data.home.convince.heading }}</h1>
    {% for reason in site.data.home.convince.reasons %}
    <div>
      <img src="{{ reason.image.src }}" alt="{{ reason.image.alt }}" />
      <p>{{ reason.text | markdownify }}</p>
    </div>
    {% endfor %}
    <button>{{ site.data.home.convince.cta }}</button>
  </section>
</div>
