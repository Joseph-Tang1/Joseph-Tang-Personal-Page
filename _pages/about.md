---
layout: default
title: About
permalink: /
description: Joseph Tang's academic homepage. Electromagnetic metasurfaces, near-field wave control, and machine learning for physical systems.
---
<div id="main-content" class="academic-home">
  <section id="about" class="intro-section" aria-labelledby="intro-title">
    <p class="eyebrow">Southeast University · EPFL LEAP</p>
    <h1 id="intro-title">Joseph <span>Tang</span></h1>
    <p class="intro-subtitle">Electromagnetic waves, intelligent design, and sensing.</p>
    <div class="intro-grid">
      <div class="intro-copy">
        <p>{{ site.data.profile.bio }}</p>
        <p>{{ site.data.profile.experience_bio }}</p>
        <div class="contact-links">
          <a href="mailto:{{ site.email }}">Email <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/Joseph-Tang1">GitHub <span aria-hidden="true">↗</span></a>
          <a href="{{ '/assets/pdf/Joseph_Tang_CV.pdf' | relative_url }}">Download CV <span class="file-format">PDF</span></a>
        </div>
      </div>
      <aside class="intro-sidebar" aria-label="Profile and research interests">
        <figure class="profile-photo"><img src="{{ '/assets/img/profile.jpeg' | relative_url }}" alt="Profile photograph at sunset" width="6048" height="4024" fetchpriority="high" decoding="async"></figure>
        <div class="research-focus">
          <h2>Research interests</h2>
          {% for interest in site.data.profile.interests %}<p>{{ interest }}</p>{% endfor %}
          <a href="#projects">Explore my work ↓</a>
        </div>
      </aside>
    </div>
  </section>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <div class="section-heading"><h2 id="projects-title">Research projects</h2><span>2024–2026</span></div>
    <p class="section-intro">Selected work in wave control, physical sensing, and learning-based systems.</p>
    {% include project-list.liquid %}
  </section>
  <section id="education" class="education-section" aria-labelledby="education-title">
    <div class="section-heading"><h2 id="education-title">Education</h2><a href="{{ '/cv/' | relative_url }}">Full CV ↗</a></div>
    {% include education-list.liquid %}
  </section>
  <section class="contact-section" aria-labelledby="contact-title"><h2 id="contact-title">Get in touch</h2><p>I welcome conversations about metasurfaces, near-field sensing, and computational design.</p><a href="mailto:{{ site.email }}">{{ site.email }} ↗</a></section>
</div>
