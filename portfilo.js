body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background-color: #1E88E5;
    color: #fff;
    padding: 40px 0;
    text-align: center;
}

header img {
    border-radius: 50%;
    max-width: 150px;
    margin-bottom: 20px;
}

.header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

header h1 {
    margin: 0;
}

header p {
    margin: 5px 0;
    color: #BBDEFB;
}

section {
    padding: 40px 0;
}

h2 {
    color: #1E88E5;
}

.about-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.about-text {
    flex-basis: calc(50% - 10px);
}

.education,
.experience {
    flex-basis: calc(25% - 10px);
    margin-top: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}

.project {
    margin-bottom: 20px;
}

footer {
    background-color: #f5f5f5;
    text-align: center;
    color: #888;
    padding: 20px 0;
}