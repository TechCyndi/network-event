* {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #000;
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 15px;
}

header svg{
    fill: #ffe81f;
    height: 75px;

}

.date {
    color: rgb(157, 157, 157);
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 2px;
}

.title {
    font-size: 1.5rem;
}

.crawl {
    font-size: 16px;
    line-height: 1.4;
    padding-bottom: 1rem;
    border-bottom: 2px solid #8e2e2e;
    margin-bottom: 1rem;
}

a {
    color: #e2ce20;
    text-decoration: none;
}
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    max-width: 1300px;

}

.data-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  
  .data-list {
    padding: 1rem 1rem;
    border-radius: 10px;
  }

  .data-list:hover {
    box-shadow: 0 0 1rem rgba(24, 162, 216, 1);
  }
   .data-list:nth-child(1) {
    background: url('https://finmavis.github.io/swapi-task/static/media/bg-card-1.0c96fd00.png');
  }

  .data-list:nth-child(2) {
    background: url('https://finmavis.github.io/swapi-task/static/media/bg-card-2.b0a7b209.png');
  }

  .data-list:nth-child(3) {
    background: url('https://finmavis.github.io/swapi-task/static/media/bg-card-3.1914d853.png');
  }

  .data-list:nth-child(4) {
    background: url('https://finmavis.github.io/swapi-task/static/media/bg-card-4.c21c4d4b.png');
  }

  .data-list:nth-child(5) {
    background: url('https://finmavis.github.io/swapi-task/static/media/bg-card-5.67d061d6.png');
  }

  .data-list:nth-child(6) {
    background: url('https://finmavis.github.io/swapi-task/static/media/bg-card-6.b4fea25d.png');
  } 

  
