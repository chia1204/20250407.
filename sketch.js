let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100); // 使用 HSB 色彩模式
  background("#f5ebe0");

  // Generate 60 circles with random properties
  for (let i = 0; i < 60; i++) {
    circles.push({
      x: random(0, width), // x 座標範圍為整個畫布寬度
      y: random(0, height), // y 座標範圍為整個畫布高度
      size: random(30, 50), // 圓形大小範圍
      color: color(random(360), 50, 92), // 飽和度設為 50，亮度降低到 92
    });
  }
}

function draw() {
  background("#f5ebe0");

  // Update and draw each circle
  for (let circle of circles) {
    let sizeVariation = map(mouseX, 0, width, 20, 80); // 根據滑鼠水平位置調整大小
    let newSize = circle.size + sizeVariation;

    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, newSize); // 繪製圓形
  }
}
