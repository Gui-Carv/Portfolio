function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// async function fetchRepos() {
//     try {
//         const response = await fetch('https://api.github.com/users/seu-usuario/repos');
//         const repos = await response.json();

//         const reposContainer = document.getElementById('repos-container');
        
//         repos.forEach(repo => {
//             // Cria o container do repositório
//             const repoDiv = document.createElement('div');
//             repoDiv.classList.add('repositorio');

//             // Nome do repositório
//             const repoName = document.createElement('h3');
//             repoName.textContent = repo.name;

//             // Descrição do repositório
//             const repoDescription = document.createElement('p');
//             repoDescription.textContent = repo.description || "Sem descrição.";

//             // Link para o repositório no GitHub
//             const repoLink = document.createElement('a');
//             repoLink.href = repo.html_url;
//             repoLink.textContent = 'Visitar Repositório';
//             repoLink.target = '_blank';

//             // Adiciona elementos ao container do repositório
//             repoDiv.appendChild(repoName);
//             repoDiv.appendChild(repoDescription);
//             repoDiv.appendChild(repoLink);

//             // Adiciona o container de repositório à página
//             reposContainer.appendChild(repoDiv);
//         });
//     } catch (error) {
//         console.error("Erro ao buscar repositórios:", error);
//     }
// }

// fetchRepos();