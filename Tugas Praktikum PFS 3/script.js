document.addEventListener('DOMContentLoaded', function() {
    // Chart data
    const data = [
        { month: 'Jan', income: 700, expense: 450, visitors: 735, orders: 650 },
        { month: 'Feb', income: 489, expense: 675, visitors: 497, orders: 300 },
        { month: 'Mar', income: 460, expense: 300, visitors: 566, orders: 470 },
        { month: 'Apr', income: 547, expense: 400, visitors: 653, orders: 800 },
        { month: 'May', income: 388, expense: 590, visitors: 590, orders: 734 },
        { month: 'Jun', income: 555, expense: 356, visitors: 838, orders: 926 },
        { month: 'Jul', income: 679, expense: 333, visitors: 780, orders: 879 },
    ];

    // Income vs Expense Chart
    const incomeExpenseCtx = document.getElementById('incomeExpenseChart').getContext('2d');
    new Chart(incomeExpenseCtx, {
        type: 'line',
        data: {
            labels: data.map(d => d.month),
            datasets: [
                {
                    label: 'Income',
                    data: data.map(d => d.income),
                    borderColor: '#14b8a6',
                    fill: false,
                },
                {
                    label: 'Expense',
                    data: data.map(d => d.expense),
                    borderColor: '#ef4444',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Visitors vs Orders Chart
    const visitorsOrdersCtx = document.getElementById('visitorsOrdersChart').getContext('2d');
    new Chart(visitorsOrdersCtx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.month),
            datasets: [
                {
                    label: 'Visitors',
                    data: data.map(d => d.visitors),
                    backgroundColor: '#3b82f6',
                },
                {
                    
                    label: 'Orders',
                    data: data.map(d => d.orders),
                    backgroundColor: '#f59e0b',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});