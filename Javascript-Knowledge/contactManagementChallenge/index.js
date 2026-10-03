// on my way
/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/
import { contactsArr } from './contactsData.js'

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
/*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
    const nameCard = document.createElement("p")
    const emailCard = document.createElement("p")
    const phoneCard = document.createElement("p")
    nameCard.textContent = contactObj.name
    emailCard.textContent = contactObj.email
    phoneCard.textContent = contactObj.phone
    
    contactCard.appendChild(nameCard)
    contactCard.appendChild(emailCard)
    contactCard.appendChild(phoneCard)
    
    contactDisplay.appendChild(contactCard)
    
}

patternSearchSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    contactDisplay.innerHTML = ''

    const regex = new RegExp(patternSearchInput.value, 'i')
    contactsArr.filter(function(contact) {
        return regex.test(contact.name)
    }).forEach(function(contact) {
        renderContact(contact)
    })
    
})

// solution from scrimba
/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/

// const patternSearchInput = document.getElementById('pattern-search-input')
// const patternSearchSubmit = document.getElementById('pattern-search-submit')
// const contactDisplay = document.getElementById('contact-display')


// patternSearchSubmit.addEventListener('click', function() {
//     findMatchingContacts(contactsArr, patternSearchInput.value)
// })

// function findMatchingContacts(contactsArr, pattern) {
//     contactDisplay.innerHTML = ''
//     const regex = new RegExp(pattern, 'i')
//     contactsArr.filter(function(contact) {
//         return regex.test(contact.name)
//     })
//     .forEach(function(contact) {
//         renderContact(contact)
//     })
// }


// function renderContact(contactObj) {
//     const { name, email, phone } = contactObj
//     const contactCard = document.createElement('aside')
//     contactCard.classList.add('contact-card')
//     const nameElem = document.createElement('p')
//     const emailElem = document.createElement('p')
//     const phoneElem = document.createElement('p')
//     nameElem.innerText = name
//     emailElem.innerText = email
//     phoneElem.innerText = phone
//     contactCard.appendChild(nameElem)
//     contactCard.appendChild(emailElem)
//     contactCard.appendChild(phoneElem)
//     contactDisplay.appendChild(contactCard)
// /*
//     The CSS for contact-card has been done for you. 
//     The name, email and phone details can be placed in
//     'p' elements and placed inside contact-card. 
// */
// }