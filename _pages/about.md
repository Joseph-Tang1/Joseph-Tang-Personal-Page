---
layout: default
title: About
permalink: /
description: Joseph Tang's academic homepage. Electromagnetics and photonics, near-field sensing and wavefront control, and machine learning for physical systems.
---
<div id="main-content" class="academic-home">
  <section id="about" class="intro-section" aria-labelledby="intro-title">
    <p class="eyebrow">Southeast University · EPFL LEAP</p>
    <h1 id="intro-title">Joseph <span>Tang</span></h1>
    <div class="intro-contacts" aria-label="Contact information">
      <a href="mailto:{{ site.email }}" aria-label="Email {{ site.email }}">
        <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 6 9 7 9-7"></path></svg>
        <span>{{ site.email }}</span>
      </a>
      <a href="tel:{{ site.data.profile.phone_e164 }}" aria-label="Call {{ site.data.profile.phone }}">
        <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L9.1 10.9a16 16 0 0 0 4 4l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path></svg>
        <span>{{ site.data.profile.phone }}</span>
      </a>
    </div>
    <div class="intro-grid">
      <div class="intro-copy">
        <p>{{ site.data.profile.bio }}</p>
        <p>{{ site.data.profile.experience_bio }}</p>
        <div class="contact-links">
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
  <section id="education" class="education-section" aria-labelledby="education-title">
    <div class="section-heading"><h2 id="education-title">Education</h2><a href="{{ '/cv/' | relative_url }}">Full CV ↗</a></div>
    {% include education-list.liquid %}
  </section>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <div class="section-heading"><h2 id="projects-title">Research projects</h2><span>2024–2026</span></div>
    <p class="section-intro">Selected work in wave control, physical sensing, and learning-based systems.</p>
    {% include project-list.liquid %}
  </section>
</div>
