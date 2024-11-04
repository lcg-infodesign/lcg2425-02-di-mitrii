function setup() {
  createCanvas(500, 500);
  background(232, 220, 202);
  noLoop();

  let cols = 10;
  let rows = 10;
  let spacing = width / cols;

  // crea la griglia
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      push();
      translate(i * spacing + spacing / 2, j * spacing + spacing / 2);
      disegnaGlifo(0, 0, spacing * 0.6); // questo crea ogni glifo centrato nella sua cella
      pop();

      // crea gli "accenti" tra i glifi
      if (i < cols - 1) {
        let x1 = i * spacing + spacing;
        let y1 = j * spacing + spacing / 2;
        let x2 = x1 + random(-spacing * 0.1, spacing * 0.1);
        strokeWeight(random(0.5, 1.5));
        line(x1, y1, x2, y1);
      }
      if (j < rows - 1) {
        let x1 = i * spacing + spacing / 2;
        let y1 = j * spacing + spacing;
        let y2 = y1 + random(-spacing * 0.1, spacing * 0.1);
        strokeWeight(random(0.5, 1.5));
        line(x1, y1, x1, y2);
      }
    }
  }
}

function disegnaGlifo(x, y, size) {
  let lineWeight = random(0.5, 1.0); 
  strokeWeight(lineWeight);
  stroke(0);
  noFill();

  // disegna il quadrato esterno "spezzato"
  let segments = 4; // n. di segmenti per lato
  let segmentLength = size / segments;
  for (let i = 0; i < segments; i++) {
    if (random(1) > 0.3) {
      line(x - size / 2 + i * segmentLength, y - size / 2, x - size / 2 + (i + 1) * segmentLength, y - size / 2); 
    }
    if (random(1) > 0.3) {
      line(x + size / 2, y - size / 2 + i * segmentLength, x + size / 2, y - size / 2 + (i + 1) * segmentLength); 
    }
    if (random(1) > 0.3) {
      line(x + size / 2 - i * segmentLength, y + size / 2, x + size / 2 - (i + 1) * segmentLength, y + size / 2); 
    }
    if (random(1) > 0.3) {
      line(x - size / 2, y + size / 2 - i * segmentLength, x - size / 2, y + size / 2 - (i + 1) * segmentLength);
    }
  }

  // "radicali" interni
  if (random(1) > 0.5) {
    line(x - size / 2, y, x + size / 2, y); // linea orizzontale centrale
  }
  if (random(1) > 0.5) {
    line(x, y - size / 2, x, y + size / 2); // linea verticale centrale
  }
  if (random(1) > 0.5) {
    rect(x, y, size * random(0.3, 0.5), size * random(0.3, 0.5)); // rettangolo interno variabile
  }

  // quadrati interni
  if (random(1) > 0.3) {
    rect(x - size * 0.2, y - size * 0.2, size * 0.2, size * 0.2); // alto sx
  }
  if (random(1) > 0.3) {
    rect(x + size * 0.2, y + size * 0.2, size * 0.15, size * 0.15); // basso dx
  }

  // cerchi concentrici interni 
  if (random(1) > 0.5) {
    let numCircles = int(random(1, 3));
    for (let i = 1; i <= numCircles; i++) {
      ellipse(x, y, size * (0.2 + i * 0.1));
    }
  }

  // archi di circonferenza interni 
  if (random(1) > 0.5) {
    arc(x, y, size * 0.7, size * 0.7, 0, HALF_PI);
  }
  if (random(1) > 0.5) {
    arc(x, y, size * 0.5, size * 0.5, PI, PI + HALF_PI);
  }
}
