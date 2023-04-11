<template>
  <section class="content">
    <p class="title">À propos</p>
    <div class="about-me">
      <div>
        <p>
          Actuellement en première année de master informatique à l'université
          Lyon 2, je me passionne pour le développement et en particulier dans
          le domaine du web. J'ai pour ambition de devenir développeur fullstack
          et mettre à profit mes connaissances et compétences en entreprise.
        </p>
      </div>
      <div>
        <img src="../assets/images/me.jpg" alt="Photo de moi" class="me" />
      </div>
      <div>
        <p>
          Mon cursus m'offre l'opportunité de réaliser un stage dans l'objectif
          de valider mon année. Si vous êtes à la recherche d'un stagiaire et
          potentiel alternant pour l'année qui suit, n'hésitez pas à me
          contacter par
          <a
            href="mailto:mathis.dousse@outlook.fr"
            class="social-link"
            aria-label="link to my mail"
            >mail</a
          >
          ou sur
          <a
            href="https://www.linkedin.com/in/mathis-dousse"
            target="_blank"
            class="social-link"
            aria-label="link to my linkedin"
            >linkedin</a
          >.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about-me > * {
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 0;
}

.social-link {
  position: relative;
  transition: all 300ms ease;
}

.social-link::after {
  background-color: var(--teal);
  height: 6%;
  bottom: 0;
  content: "";
  left: 0;
  min-height: 2px;
  position: absolute;
  width: 100%;
  z-index: -1;
  transition: height 300ms ease;
}

.social-link:hover::after {
  height: 100%;
}

.social-link:hover {
  color: white;
}

.me {
  border-radius: 0.5rem;
  transition: all 300ms ease;
}

.me:hover {
  transform: translateY(-0.5rem);
}

@media (max-width: 768px) {
  .about-me {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
