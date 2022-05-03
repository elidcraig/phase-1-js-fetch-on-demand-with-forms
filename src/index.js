const init = () => {
    const inputForm = document.querySelector('form')
    inputForm.addEventListener('submit', event => {
        event.preventDefault()
        const input = event.target['searchByID']
        // console.log(input.value)
        
        fetch('http://localhost:3000/movies')
        .then(resp => resp.json())
        .then(data => console.log(data))
    })
}

document.addEventListener('DOMContentLoaded', init);

// Add event listeners to capture form data
// Fetch data based on what the user types into that form
// Display that data on the page