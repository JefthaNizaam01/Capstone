<template>
  <div class="about">
    <div class="about-image">
      <img src="https://jefthanizaam01.github.io/favoriteimages/images/timeclock.jpg" alt="Elegant Watch">
      <div class="clock">
        <div class="second-hand"></div>
      </div>
    </div>
    <div class="about-content">
      <header class="about-header">
        <h1 class="animated-heading">About Us</h1>
        <h2 class="animated-heading">
          <span class="space-before">W</span>
          <span class="space-before">h</span>
          <span class="space-before">e</span>
          <span class="space-before">r</span>
          <span class="space-before">e</span>
          <span class="space-mid"></span>
          <span class="space-before">E</span>
          <span class="space-before">v</span>
          <span class="space-before">e</span>
          <span class="space-before">r</span>
          <span class="space-before">y</span>
          <span class="space-mid"></span> 
          <span class="space-before">S</span>
          <span class="space-before">e</span>
          <span class="space-before">c</span>
          <span class="space-before">o</span>
          <span class="space-before">n</span>
          <span class="space-before">d</span>
          <span class="space-mid"></span> 
          <span class="space-before">C</span>
          <span class="space-before">o</span>
          <span class="space-before">u</span>
          <span class="space-before">n</span>
          <span class="space-before">t</span>
          <span class="space-before">s</span>
          <span class="space-end">.</span> 
        </h2>
      </header>
      <section class="about-text">
        <p>
          At Timeless, we believe that every moment is precious. Our e-commerce store is dedicated to more than just selling watches; we are committed to celebrating the art of timekeeping. In a world where time seems to slip through our fingers faster than we realize, Timeless serves as a reminder to cherish each fleeting second.
        </p>
        <p>
          At Timeless, we understand that time is one of the most valuable resources we have. We strive to offer you watches that are more than just accessories—they are symbols of the moments that shape our lives. Discover watches that resonate with your style and appreciate the beauty of time with Timeless.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #3d3b39, #ece7e2);
  padding: 40px;
}

.about-image {
  flex: 1;
  max-width: 50%;
  margin-right: 30px;
  position: relative; 
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.clock {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px; 
  height: 150px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.second-hand {
  position: absolute;
  width: 2px; 
  height: 97px; 
  background: #b9bcc1; 
  top: -3.1%;
  left: 50%;
  transform-origin: bottom center;
  transform: rotate(0deg);
  animation: tick 60s linear infinite;
  border-radius: 50% 50% 0 0;
}

.about-content {
  flex: 1.5;
  padding: 40px;
  background-color: rgba(218, 208, 208, 0.95);
  border-radius: 15px;
  animation: fadeIn 2s ease-in-out;
  border: 1px solid #e0dcd7;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.about-header {
  margin-bottom: 36px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 20px;
  text-align: center;
}

.about-header h1 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  color: #847272;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
}

.about-header h2 {
  font-size: 30px;
  font-weight: 300;
  color: #666;
  margin-bottom: 40px;
  font-family: 'Garamond', serif;
  font-style: italic;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  word-spacing: 15px;
}

.about-text {
  text-align: justify;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white;
  font-family: 'Georgia', serif;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes tick {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animated-heading span {
  display: inline-block;
  opacity: 0;
  animation: letterAnimation 1s forwards;
  letter-spacing: 4px;
}

@keyframes letterAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.space-before {
  margin-right: 3px;
}

.space-mid {
  margin: 0 4px; 
}

.space-end {
  margin-left: 3px; 
}

/* Responsive Design */
@media (max-width: 1028px) {
  .about {
    flex-direction: column;
    padding: 30px;
  }

  .about-image {
    margin-right: 0;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .about-content {
    padding: 30px;
  }

  .about-header h1 {
    font-size: 40px;
  }

  .about-header h2 {
    font-size: 25px;
  }
}

@media (max-width: 990px) {
  .about-header h1 {
    font-size: 36px;
  }

  .about-header h2 {
    font-size: 22px;
    word-spacing: 10px;
  }

  .about-text p {
    font-size: 16px;
  }
}

@media (max-width: 525px) {
  .about-content {
    padding: 20px;
  }

  .about-header h1 {
    font-size: 28px;
  }

  .about-header h2 {
    font-size: 18px;
    word-spacing: 5px;
  }

  .about-text p {
    font-size: 14px;
  }

  .about-image img {
    border-radius: 5px;
  }

  .second-hand {
    height: 80px;
  }

  .clock {
    width: 120px;
    height: 120px;
  }
}
</style>
