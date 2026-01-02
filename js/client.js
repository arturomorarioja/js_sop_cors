document.querySelector('#btnNoAllowOrigin').addEventListener('click', () => { sendRequest(false); });
document.querySelector('#btnAllowOrigin').addEventListener('click', () => { sendRequest(true); });

const sendRequest = (allowOrigin) => {    
    fetch(`http://localhost:${allowOrigin ? '9001' : '9000'}/data`)
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
};