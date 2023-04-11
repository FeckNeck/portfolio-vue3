<template>
  <section class="cover-sheet">
    <div class="cover-infos">
      <p class="title">Mathis Dousse</p>
      <p class="sub-title">Etudiant en informatique</p>
      <a href="/cv.pdf" target="_blank" class="cv" aria-label="Download CV">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="16"></line>
          <polyline points="8 12 12 16 16 12"></polyline>
          <line x1="8" y1="20" x2="16" y2="20"></line>
        </svg>
        <span>Download CV</span>
      </a>
    </div>
    <img src="../assets/images/dev.svg" alt="Cover" class="cover-img" />
  </section>
</template>

<style scoped>
.cover-sheet {
  min-height: 85vh;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
}
.cover-infos {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sub-title {
  font-size: 1.5rem;
  line-height: 2rem;
}
.cv {
  align-items: center;
  background-color: var(--secondary);
  border-radius: 0.25rem;
  border: 2px solid var(--border);
  box-shadow: var(--shadow);
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  transition: all 300ms ease;
}

.cv:hover {
  background-color: var(--teal);
  border-color: var(--teal);
  color: white;
}

.cover-img {
  width: 66%;
}

@media (max-width: 768px) {
  .cover-sheet {
    flex-direction: column;
    justify-content: space-evenly;
  }
  .cover-infos {
    align-items: center;
  }
  .cover-img {
    width: 100%;
  }
}
</style>
