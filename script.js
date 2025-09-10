// Görev yönetimi için ana veri yapıları
let tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
let projects = JSON.parse(localStorage.getItem('todoProjects')) || [];
let currentFilter = 'all';
let currentProject = null;

// DOM elementleri
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const listContainer = document.getElementById('list-container');
const currentListTitle = document.getElementById('current-list-title');
const filterItems = document.querySelectorAll('.filter-item');
const projectList = document.getElementById('project-list');
const addProjectButton = document.getElementById('add-project-button');

// Event listener'ları başlat
function initializeApp() {
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Filtre butonları
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            filterItems.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            const filterText = this.querySelector('span').textContent;
            switch(filterText) {
                case 'Bugün':
                    currentFilter = 'today';
                    currentProject = null;
                    currentListTitle.textContent = 'Bugün';
                    break;
                case 'Önemli':
                    currentFilter = 'important';
                    currentProject = null;
                    currentListTitle.textContent = 'Önemli Görevler';
                    break;
                case 'Planlanan':
                    currentFilter = 'planned';
                    currentProject = null;
                    currentListTitle.textContent = 'Planlanan Görevler';
                    break;
                case 'Tüm Görevler':
                    currentFilter = 'all';
                    currentProject = null;
                    currentListTitle.textContent = 'Tüm Görevler';
                    break;
            }
            
            // Proje seçimini temizle
            document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
            displayTasks();
            updateCounts();
        });
    });

    // Yeni proje ekleme
    addProjectButton.addEventListener('click', addProject);

    // Başlangıçta görevleri göster
    displayProjects();
    displayTasks();
    updateCounts();
}

// Yeni görev ekleme
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        important: false,
        dueDate: null,
        project: currentProject,
        createdAt: new Date()
    };

    tasks.push(task);
    saveToLocalStorage();
    taskInput.value = '';
    displayTasks();
    updateCounts();
}

// Görevi tamamla/tamamlama
function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveToLocalStorage();
        displayTasks();
        updateCounts();
    }
}

// Görevi sil
function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveToLocalStorage();
    displayTasks();
    updateCounts();
}

// Görevin önemli durumunu değiştir
function toggleImportant(taskId, event) {
    event.stopPropagation();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.important = !task.important;
        saveToLocalStorage();
        displayTasks();
        updateCounts();
    }
}

// Görevleri filtrele ve göster
function getFilteredTasks() {
    let filteredTasks = tasks;

    if (currentProject) {
        filteredTasks = tasks.filter(task => task.project === currentProject);
    } else {
        switch(currentFilter) {
            case 'today':
                const today = new Date();
                filteredTasks = tasks.filter(task => {
                    if (!task.dueDate) return false;
                    const taskDate = new Date(task.dueDate);
                    return taskDate.toDateString() === today.toDateString();
                });
                break;
            case 'important':
                filteredTasks = tasks.filter(task => task.important);
                break;
            case 'planned':
                filteredTasks = tasks.filter(task => task.dueDate);
                break;
            case 'all':
            default:
                filteredTasks = tasks;
                break;
        }
    }

    return filteredTasks;
}

// Görevleri DOM'da göster
function displayTasks() {
    const filteredTasks = getFilteredTasks();
    listContainer.innerHTML = '';

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'checked' : '';
        
        const taskContent = document.createElement('div');
        taskContent.style.flexGrow = '1';
        taskContent.style.display = 'flex';
        taskContent.style.alignItems = 'center';
        taskContent.style.paddingLeft = task.completed ? '30px' : '10px';
        
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        taskText.style.marginRight = '10px';
        
        const actionsContainer = document.createElement('div');
        actionsContainer.style.display = 'flex';
        actionsContainer.style.alignItems = 'center';
        actionsContainer.style.gap = '5px';

        // Önemli butonu
        const importantBtn = document.createElement('i');
        importantBtn.className = task.important ? 'fas fa-star' : 'far fa-star';
        importantBtn.style.color = task.important ? '#fbbf24' : '#a0aec0';
        importantBtn.style.cursor = 'pointer';
        importantBtn.style.fontSize = '1.2rem';
        importantBtn.style.padding = '5px';
        importantBtn.addEventListener('click', (e) => toggleImportant(task.id, e));

        // Silme butonu
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '×';
        deleteBtn.style.color = '#a0aec0';
        deleteBtn.style.fontSize = '1.5rem';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.padding = '5px';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTask(task.id);
        });

        actionsContainer.appendChild(importantBtn);
        actionsContainer.appendChild(deleteBtn);
        
        taskContent.appendChild(taskText);
        li.appendChild(taskContent);
        li.appendChild(actionsContainer);

        // Görev tamamlama için tıklama eventi
        li.addEventListener('click', () => toggleTask(task.id));

        listContainer.appendChild(li);
    });
}

// Yeni proje ekleme
function addProject() {
    const projectName = prompt('Yeni proje adı:');
    if (projectName && projectName.trim() !== '') {
        const project = {
            id: Date.now(),
            name: projectName.trim(),
            createdAt: new Date()
        };
        projects.push(project);
        saveToLocalStorage();
        displayProjects();
        updateCounts();
    }
}

// Projeleri görüntüle
function displayProjects() {
    projectList.innerHTML = '';

    projects.forEach(project => {
        const li = document.createElement('li');
        li.className = 'project-item';
        if (currentProject === project.id) {
            li.classList.add('active');
        }

        li.innerHTML = `
            <i class="fas fa-folder icon"></i>
            <span>${project.name}</span>
            <span class="count">${getProjectTaskCount(project.id)}</span>
        `;

        li.addEventListener('click', () => {
            // Tüm proje ve filtre seçimlerini temizle
            document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.filter-item').forEach(f => f.classList.remove('active'));
            
            // Bu projeyi seç
            li.classList.add('active');
            currentProject = project.id;
            currentFilter = null;
            currentListTitle.textContent = project.name;
            
            displayTasks();
            updateCounts();
        });

        projectList.appendChild(li);
    });
}

// Proje görev sayısını hesapla
function getProjectTaskCount(projectId) {
    return tasks.filter(task => task.project === projectId && !task.completed).length;
}

// Sayaçları güncelle
function updateCounts() {
    const today = new Date();
    
    // Bugün
    const todayCount = tasks.filter(task => {
        if (!task.dueDate || task.completed) return false;
        const taskDate = new Date(task.dueDate);
        return taskDate.toDateString() === today.toDateString();
    }).length;
    
    // Önemli
    const importantCount = tasks.filter(task => task.important && !task.completed).length;
    
    // Planlanan
    const plannedCount = tasks.filter(task => task.dueDate && !task.completed).length;
    
    // Tüm görevler
    const allCount = tasks.filter(task => !task.completed).length;

    // DOM'u güncelle
    filterItems.forEach(item => {
        const text = item.querySelector('span').textContent;
        const countSpan = item.querySelector('.count');
        
        switch(text) {
            case 'Bugün':
                countSpan.textContent = todayCount;
                break;
            case 'Önemli':
                countSpan.textContent = importantCount;
                break;
            case 'Planlanan':
                countSpan.textContent = plannedCount;
                break;
            case 'Tüm Görevler':
                countSpan.textContent = allCount;
                break;
        }
    });

    // Proje sayaçlarını güncelle
    document.querySelectorAll('.project-item .count').forEach((countSpan, index) => {
        if (projects[index]) {
            countSpan.textContent = getProjectTaskCount(projects[index].id);
        }
    });
}

// LocalStorage'a kaydet
function saveToLocalStorage() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
    localStorage.setItem('todoProjects', JSON.stringify(projects));
}

// Uygulama başlatma
document.addEventListener('DOMContentLoaded', initializeApp);