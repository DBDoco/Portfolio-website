/* Animations */
window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
    });
    
    // Load GitHub projects after page loads
    loadGitHubProjects();
});

/* GitHub API Configuration */
const GITHUB_USERNAME = 'DBDoco';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

/* Project categorization */
function categorizeProject(repo) {
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    const language = (repo.language || '').toLowerCase();
    const topics = repo.topics || [];
    
    // Combine all text for analysis
    const allText = `${name} ${description} ${topics.join(' ')}`.toLowerCase();
    
    // Games category
    if (
        language === 'shaderlab' ||
        allText.includes('game') ||
        allText.includes('unity') ||
        allText.includes('unreal') ||
        allText.includes('godot') ||
        allText.includes('pygame') ||
        allText.includes('sfml') ||
        allText.includes('flappy') ||
        allText.includes('simulator') ||
        allText.includes('platformer') ||
        allText.includes('fps') ||
        allText.includes('horror') ||
        name.includes('mages') ||
        name.includes('monsters') ||
        name.includes('echoes') ||
        name.includes('isolation') ||
        name.includes('bird') ||
        name.includes('fight')
    ) {
        return 'games';
    }
    
    // Web category
    if (
        language === 'html' ||
        language === 'css' ||
        language === 'scss' ||
        language === 'sass' ||
        language === 'javascript' ||
        language === 'typescript' ||
        language === 'php' ||
        language === 'vue' ||
        allText.includes('web') ||
        allText.includes('website') ||
        allText.includes('html') ||
        allText.includes('css') ||
        allText.includes('bootstrap') ||
        allText.includes('react') ||
        allText.includes('angular') ||
        allText.includes('vue') ||
        allText.includes('django') ||
        allText.includes('flask') ||
        allText.includes('express') ||
        allText.includes('node') ||
        allText.includes('three.js') ||
        allText.includes('portfolio') ||
        allText.includes('showcase') ||
        allText.includes('simon') ||
        name.includes('ice') ||
        name.includes('covid') ||
        name.includes('nuber')
    ) {
        return 'web';
    }
    
    // Mobile category
    if (
        allText.includes('android') ||
        allText.includes('ios') ||
        allText.includes('mobile') ||
        allText.includes('flutter') ||
        allText.includes('xamarin') ||
        allText.includes('react native') ||
        allText.includes('app') ||
        name.includes('chat-app') ||
        name.includes('languide')
    ) {
        return 'mobile';
    }
    
    // Tools category
    if (
        allText.includes('tool') ||
        allText.includes('utility') ||
        allText.includes('extension') ||
        allText.includes('library') ||
        allText.includes('framework') ||
        allText.includes('bash') ||
        allText.includes('shell') ||
        allText.includes('bookmarks') ||
        allText.includes('clone') ||
        name.includes('linux') ||
        name.includes('better-bookmarks') ||
        name.includes('ice-css')
    ) {
        return 'tools';
    }
    
    // Software category (desktop applications, algorithms, etc.)
    if (
        language === 'c++' ||
        language === 'c#' ||
        language === 'python' ||
        language === 'java' ||
        language === 'c' ||
        language === 'clarion' ||
        language === 'rust' ||
        language === 'go' ||
        allText.includes('algorithm') ||
        allText.includes('simulation') ||
        allText.includes('desktop') ||
        allText.includes('console') ||
        allText.includes('hash') ||
        allText.includes('table') ||
        allText.includes('boids') ||
        name.includes('hash-table') ||
        name.includes('boids') ||
        name.includes('simulation')
    ) {
        return 'software';
    }
    
    // Default to software if no specific category matches
    return 'software';
}

/* Load projects from GitHub */
async function loadGitHubProjects() {
    const loadingContainer = document.getElementById('loading-container');
    const errorContainer = document.getElementById('error-container');
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        loadingContainer.style.display = 'block';
        errorContainer.style.display = 'none';
        
        const response = await fetch(`${GITHUB_API_URL}?sort=updated&per_page=100`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Filter out forked repos and sort by stars and updated date
        const filteredRepos = repos
            .filter(repo => !repo.fork && !repo.private)
            .sort((a, b) => {
                // Sort by stars first, then by update date
                if (b.stargazers_count !== a.stargazers_count) {
                    return b.stargazers_count - a.stargazers_count;
                }
                return new Date(b.updated_at) - new Date(a.updated_at);
            });
        
        displayProjects(filteredRepos);
        loadingContainer.style.display = 'none';
        
        // Initialize AOS after projects are loaded
        setTimeout(() => {
            AOS.refresh();
        }, 100);
        
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        loadingContainer.style.display = 'none';
        errorContainer.style.display = 'block';
    }
}

/* Display projects */
function displayProjects(repos) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';
    
    repos.forEach((repo, index) => {
        const projectCard = createProjectCard(repo);
        projectsContainer.appendChild(projectCard);
        
        // Add staggered animation delay
        setTimeout(() => {
            projectCard.style.opacity = '1';
        }, index * 50);
    });
}

/* Create project card */
function createProjectCard(repo) {
    const card = document.createElement('div');
    const language = repo.language || 'Other';
    const category = categorizeProject(repo);
    
    card.className = `projects-card ${category}`;
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.3s ease';
    
    // Format description
    const description = repo.description || 'No description available.';
    const truncatedDescription = description.length > 120 ? 
        description.substring(0, 120) + '...' : description;
    
    // Format dates
    const updatedDate = new Date(repo.updated_at).toLocaleDateString();
    const createdDate = new Date(repo.created_at).toLocaleDateString();
    
    // Get category display name
    const categoryDisplay = getCategoryDisplayName(category);
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-category">
                <span class="category-dot" style="background-color: ${getCategoryColor(category)}"></span>
                ${categoryDisplay}
            </div>
            <div class="project-stats">
                <span class="stars">⭐ ${repo.stargazers_count}</span>
                <span class="forks">🔀 ${repo.forks_count}</span>
            </div>
        </div>
        <div class="project-language-tag">
            <span class="language-dot" style="background-color: ${getLanguageColor(language)}"></span>
            ${language}
        </div>
        <div class="project-content">
            <h2 class="project-title">${repo.name.replace(/-/g, ' ')}</h2>
            <p class="project-info">${truncatedDescription}</p>
            <div class="project-meta">
                <small>Updated: ${updatedDate}</small>
                ${repo.homepage ? `<small><a href="${repo.homepage}" target="_blank" rel="noopener">🔗 Live Demo</a></small>` : ''}
            </div>
        </div>
        <div class="project-btn-grp single">
            <a class="btn btn-primary btn-projects-1" href="${repo.html_url}" target="_blank" rel="noopener">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        </div>
    `;
    
    return card;
}

/* Get category display name */
function getCategoryDisplayName(category) {
    const categoryNames = {
        'software': 'Software',
        'web': 'Web Development',
        'games': 'Game Development',
        'mobile': 'Mobile App',
        'tools': 'Tools & Utilities'
    };
    return categoryNames[category] || 'Other';
}

/* Get category color */
function getCategoryColor(category) {
    const colors = {
        'software': '#4EA8DE',
        'web': '#f1e05a',
        'games': '#e34c26',
        'mobile': '#239120',
        'tools': '#563d7c'
    };
    return colors[category] || '#586069';
}

/* Get language color */
function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'C++': '#f34b7d',
        'C#': '#239120',
        'Java': '#b07219',
        'TypeScript': '#2b7489',
        'Vue': '#4FC08D',
        'React': '#61DAFB',
        'PHP': '#4F5D95',
        'Shell': '#89e051',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Swift': '#ffac45',
        'Kotlin': '#F18E33'
    };
    return colors[language] || '#586069';
}

/* Project section filtering */
$(document).on('click', '.projects-filter li', function () {
    $(this).addClass('projects-filter-active').siblings().removeClass('projects-filter-active')
})

$(document).ready(function () {
    const defaultFilter = 'all';

    function applyFilter(value) {
        if (value == 'all') {
            $('.projects-card').css('opacity', 1).show();
        } else {
            $('.projects-card').not('.' + value).css('opacity', 0).hide();
            $('.projects-card').filter('.' + value).css('opacity', 1).show();
        }
        AOS.refresh(); 
    }

    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        applyFilter(value);
    });

    // Set up initial filter after projects are loaded
    setTimeout(() => {
        applyFilter(defaultFilter);
        $('.list[data-filter="' + defaultFilter + '"]').addClass('projects-filter-active');
    }, 1000);
});

/* Get current year */
const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© | ${currentYear}`;
