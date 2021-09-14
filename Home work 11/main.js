/*
User
Contacts
ContactsApp
*/

class User {
    constructor(data) {
        this.data = {
            id: data.id || 0,
            name: data.name || null,
            phone: data.phone || null,
            email: data.email || null,
            address: data.address || null
        }    
    }
    
    edit(obj) {
         this.data = Object.assign(this.data, obj);       
    }

    get() {
        return this.data;
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    add(data) {
        if (!data.name || !data.phone) return;
        
        let id = 0;
        this.data.forEach((contact) => {
            if (contact.data.id > id) id = contact.data.id;
        })
        id++;
        data.id = id;

        const contact = new User(data);
        this.data.push(contact);
    }

    edit(id, obj) {
        if (!id || !obj.name) return;
        
        const contact = this.data.find(contact => {
            return contact.data.id == id;
        })

        contact.edit(obj);
    }

    remove(id) {
        if (!id) return;

        let index = null;
        this.data.forEach((contact, contIndex) => {
            if (contact.data.id == id) index = contIndex;
        })

        if (index === null) return;
        this.data.splice(index, 1);
    }

    get() {
        return this.data;
    }
}

class ContactsApp {
    constructor() {
        this.init();
    }
    
    init() {
        const addButtonContact = document.querySelector('contact-form__show');
        
        addButtonContact.addEventListener('click', () =>
            console.log('click')
        )     
    }
}

//new ContactsApp();