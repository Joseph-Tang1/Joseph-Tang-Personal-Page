---
layout: default
title: CV
permalink: /cv/
description: Joseph Tang's education, research experience, and technical background.
---
<div id="main-content" class="cv-page">
  <div class="cv-title"><div><p class="eyebrow">Joseph Tang</p><h1>Curriculum vitae</h1></div><a class="download-link" href="{{ '/assets/pdf/Joseph_Tang_CV.pdf' | relative_url }}">Download CV <span class="file-format">PDF ↗</span></a></div>
  <p class="cv-lead">Information Engineering undergraduate at Southeast University and visiting student in the LEAP laboratory at EPFL, working across electromagnetic design, wave control, and intelligent sensing.</p>
  <section><h2>Education</h2>{% include education-list.liquid %}</section>
  <section><h2>Research experience</h2>{% for project in site.data.research %}<div class="cv-research-row"><p class="project-meta">{{ project.institution }} <span>{{ project.date }}</span></p><h3><a href="{{ '/' | relative_url }}#{{ project.id }}">{{ project.title }}</a></h3><p class="muted">{{ project.role }}</p></div>{% endfor %}</section>
  <section><h2>Industry experience</h2><div class="education-row"><div><h3>Data Analyst Intern</h3><p>Appen, Shanghai</p><p class="muted">Curated and validated GitHub issue–pull request pairs for SWE-bench, using Python, Docker, and Git for data processing and environment verification.</p></div><span>January–February 2026</span></div></section>
  <section><h2>Technical background</h2><dl class="skills-grid"><dt>Simulation & design</dt><dd>CST Studio Suite, MATLAB, Altium Designer, Multisim, Origin</dd><dt>Programming</dt><dd>Python, C/C++, RISC-V, assembly language</dd><dt>Development</dt><dd>Git, Docker, VS Code, Keil µVision</dd><dt>English</dt><dd>IELTS 8.0 (September 2026)</dd></dl></section>
  <section><h2>Award & service</h2><p>“Zhishan” Students’ Academic & Research Scholarship, Southeast University (2025).</p><p>Student Union member (2023–2024); 104.8 hours of volunteer service.</p></section>
  <p class="cv-note">The downloadable PDF contains the complete CV.</p>
</div>
