import * as React from 'react';
import {Hero} from '../components/hero/Hero';
import styles from './Home.css';

export const Home = (props) => {
  return (
    <div>
      <Hero/>
      <div className={styles.row}>
        <div className={styles.column}>
          <p className={styles.text}>
            Nineteen years after the formation of the Empire, Luke Skywalker is thrust into the struggle of the Rebel
            Alliance when he meets Obi-Wan Kenobi, who has lived for years in seclusion on the desert planet of
            Tatooine. Obi-Wan begins Luke's Jedi training as Luke joins him on a daring mission to rescue the beautiful
            Rebel leader Princess Leia from the clutches of the evil Empire. Although Obi-Wan sacrifices himself in a
            lightsaber duel with Darth Vader, his former apprentice, Luke proves that the Force is with him by
            destroying the Empire's dreaded Death Star.
            Thirty years after the defeat of the Empire, Luke Skywalker has vanished and a new threat has risen: The
            First Order, led by the mysterious Supreme Leader Snoke and his dark side enforcer, Kylo Ren. General Leia
            Organa’s military force, the Resistance — and unlikely heroes brought together by fate — are the galaxy’s
            only hope at thwarting a new reign of evil.
            Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a
            renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic
            Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo,
            twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission,
            Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi
            are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.
            After the destruction of the Death Star, Imperial forces continue to pursue the Rebels. After the
            Rebellion's defeat on the ice planet Hoth, Luke journeys to the planet Dagobah to train with Jedi Master
            Yoda, who has lived in hiding since the fall of the Republic. In an attempt to convert Luke to the dark
            side, Darth Vader lures young Skywalker into a trap in the Cloud City of Bespin. In the midst of a fierce
            lightsaber duel with the Sith Lord, Luke faces the startling revelation that the evil Vader is in fact his
            father, Anakin Skywalker.
          </p>
        </div>
      </div>
    </div>
  );
};
