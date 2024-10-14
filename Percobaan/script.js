document.addEventListener('DOMContentLoaded', function() {
    // Chart
    const ctx = document.getElementById('financeChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
            datasets: [{
                label: 'Balance',
                data: [1000, 2000, 3000, 3500, 4000, 4500, 5000, 5500, 6482],
                borderColor: '#7c3aed',
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 5
                }
            }
        }
    });

    // Sidebar active state
    const sidebarItems = document.querySelectorAll('.sidebar nav ul li');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 0 2px #7c3aed';
    });
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
    });

    // Add New Card button
    const addNewButton = document.querySelector('.add-new');
    addNewButton.addEventListener('click', function() {
        alert('Add New Card functionality to be implemented');
    });

    // Transaction list item hover effect
    const transactionItems = document.querySelectorAll('.transaction-list li, .history-list li');
    transactionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f2f5';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });

    // Month select functionality
    const monthSelect = document.querySelector('select');
    monthSelect.addEventListener('change', function() {
        alert(`Selected month: ${this.value}`);
        // Here you would typically fetch and update transaction data for the selected month
    });

    // See all link in History section
    const seeAllLink = document.querySelector('.see-all');
    seeAllLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('View all history functionality to be implemented');
    });

    // Responsive sidebar toggle for mobile
    const logoElement = document.querySelector('.logo');
    const sidebarNav = document.querySelector('.sidebar nav');
    logoElement.addEventListener('click', function() {
        if (window.innerWidth <= 1200) {
            sidebarNav.style.display = sidebarNav.style.display === 'none' ? 'block' : 'none';
        }
    });

    // Ensure sidebar is visible when screen size changes
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1200) {
            sidebarNav.style.display = 'block';
        }
    });
});