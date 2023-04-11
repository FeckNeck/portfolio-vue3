<template>
  <div class="project-loader">
    <p class="name"></p>
    <p></p>
    <div class="language">
      <span class="round"></span>
      <p></p>
    </div>
  </div>
</template>

<style scoped>
.project-loader {
  background-color: var(--secondary);
  border-radius: 0.25rem;
  border: 2px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  padding: 0.5rem;
  transition: all 300ms ease;
}
.project-loader p {
  background: var(--loader);
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: load 1s infinite;
  border-radius: 0.25rem;
  height: 17px;
}

.name {
  width: 25%;
}

.language {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.round {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: var(--ternary);
}

.language > p {
  width: 15%;
}

@keyframes load {
  100% {
    background-position: -100% 0;
  }
}
</style>
