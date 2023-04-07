<script lang="ts" setup>
import { ref } from "vue";
import ThemeSwitch from "./ThemeSwitch.vue";
const open = ref(false);

// const openMenu = () => {
//   open.value = !open.value;
//   open.value
//     ? document.body.classList.add("menu-open")
//     : document.body.classList.remove("menu-open");
// };
</script>

<template>
  <header class="container">
    <div class="header-content">
      <button class="menu" @click="open = !open">
        <svg
          v-if="!open"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg
          v-else="open"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <img src="../assets/icons/logo.png" alt="Logo" class="logo" />
      <img
        src="../assets/icons/logo-mobile.png"
        alt="Logo"
        class="logo-mobile"
      />
      <nav class="desktop-nav">
        <ul class="links">
          <li class="link">
            <RouterLink to="/pokedex">Présentation</RouterLink>
          </li>
          <li class="link"><RouterLink to="/teams">Projets</RouterLink></li>
        </ul>
      </nav>
      <div class="interactions">
        <a class="btn-contact" href="mailto:mathis.dousse@outlook.fr">
          <img src="../assets/icons/mail.svg" alt="Me contacter" />
          <span>Me contacter</span>
        </a>
        <ThemeSwitch />
      </div>
    </div>
    <nav :hidden="!open" class="mobile-nav">
      <ul class="links">
        <li class="link">
          <RouterLink to="/pokedex">Présentation</RouterLink>
        </li>
        <li class="link"><RouterLink to="/teams">Projets</RouterLink></li>
        <li class="contact">
          <a class="btn-contact" href="mailto:mathis.dousse@outlook.fr">
            <img src="../assets/icons/mail.svg" alt="Me contacter" />
            <span>Me contacter</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;
}

.desktop-nav {
  display: block;
}

.mobile-nav {
  position: relative;
}

.logo {
  width: 6rem;
  display: block;
}

.logo-mobile {
  width: 3rem;
  display: none;
}

.links {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 4rem;
  padding: 0;
}

.link {
  transition: color 300ms ease;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.link:hover,
.router-link-active {
  color: var(--teal);
}

.menu {
  display: none;
  cursor: pointer;
  transition: opacity 250ms ease;
  opacity: 0.7;
}

.menu:hover {
  opacity: 1;
}

.interactions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.btn-contact {
  background-color: var(--teal);
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.25rem;
  color: white;
}

.btn-contact:hover {
  filter: brightness(0.85);
}

.contact {
  padding-block: 1rem;
  width: fit-content;
}

@media (max-width: 768px) {
  header {
    box-shadow: var(--shadow);
  }

  .menu {
    display: block;
  }

  .desktop-nav {
    display: none;
  }

  .links {
    flex-direction: column;
    gap: 0;
    width: 100%;
  }

  .link {
    border-bottom: 1px solid var(--border);
    padding-block: 1rem;
  }

  .interactions > .btn-contact {
    display: none;
  }

  .logo-mobile {
    display: block;
  }

  .logo {
    display: none;
  }
}
</style>
