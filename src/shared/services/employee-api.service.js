// src/services/employee-api.service.api.js
const apiBaseUrl = 'http://localhost:3000';

export function getEmployees() {
    return fetch(`${apiBaseUrl}/employees`)
        .then(response => response.json())
        .then(data => data);
}

export function addEmployee(employee) {
    return fetch(`${apiBaseUrl}/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    }).then(response => response.json());
}

export function deleteEmployee(id) {
    return fetch(`${apiBaseUrl}/employees/${id}`, {
        method: 'DELETE'
    }).then(response => response.json());
}

export function getTeams() {
    return fetch(`${apiBaseUrl}/equipos`)
        .then(response => response.json())
        .then(data => data);
}
