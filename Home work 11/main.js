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

        this.data = this.data.filter(user => {
            return user.data.id != id;
        });
    }

    get() {
        return this.data;
    }
}

let contact = new Contacts();

class ContactsApp extends Contacts {
    constructor() {
        super(); 

        this.init();
    }
    
    init() {
        const addButtonContact = document.querySelector('.contact-form__show');
        const contactForm = document.querySelector('.contact-form');
        //const formInput = document.querySelectorAll('.form__input');
        this.saveContact = document.querySelector('.form__save-button');
        this.contactList = document.querySelector('.contact-list');
        this.newContactName = document.querySelector('.input__name');
        this.newContactPhone = document.querySelector('.input__phone');
        this.newContactEmail = document.querySelector('.input__email');
        this.newContactAddress = document.querySelector('.input__address');
        
        addButtonContact.addEventListener('click', () =>
            contactForm.classList.add('active'),
        )
        addButtonContact.addEventListener('mouseup', () =>
            addButtonContact.classList.add('hidden')
        )
        this.saveContact.addEventListener('mouseup', () =>
            addButtonContact.classList.remove('hidden')
        )
        this.saveContact.addEventListener('click', event => {
            contactForm.classList.remove('active'),
            this.onAdd(event);
        });
        
        const data = this.loadOutStorage();
        if (data.length > 0) {
            this.data = data;
            this.updateList();
        }
    }
    
    saveInStorage(data) {
        const string = JSON.stringify(data);
        localStorage.setItem('contacts', string);
    }

    loadOutStorage() {
        let data = JSON.parse(localStorage.getItem('contacts'));
        if (!data || data.length == 0) return;
        
        data = data.map(user => {
            user = new User(user.data);
            return user;
        })
        
        return data;
    }

    updateList() {
        this.contactList.innerHTML = '';
        const data = this.get();
        data.forEach(contact => {
            const contactItem = document.createElement('li');
            this.contactName = document.createElement('div');
            this.contactPhone = document.createElement('div');
            this.contactEmail = document.createElement('div');
            this.contactAddress = document.createElement('div');
            const contactRemove = document.createElement('button');
            this.contactEdit = document.createElement('button');

            contactItem.classList.add('contact-items');
            this.contactName.classList.add('contact-item_name', 'contact-item');
            this.contactPhone.classList.add('contact-item_phone', 'contact-item');
            this.contactEmail.classList.add('contact-item_email', 'contact-item');
            this.contactAddress.classList.add('contact-item_address', 'contact-item');
            contactRemove.classList.add('contact-item__button');
            this.contactEdit.classList.add('contact-item__button');

            contactRemove.innerHTML = 'Delete';
            this.contactEdit.innerHTML = 'Edit';

            if (contact.data.name) this.contactName.innerHTML = contact.data.name;
            if (contact.data.phone) this.contactPhone.innerHTML = contact.data.phone;
            if (contact.data.email) this.contactEmail.innerHTML = contact.data.email;
            if (contact.data.address) this.contactAddress.innerHTML = contact.data.address;

            this.contactList.append(contactItem);
            contactItem.append(this.contactName, this.contactPhone, this.contactEmail, this.contactAddress, this.contactEdit, contactRemove);

            this.contactEdit.addEventListener('click', event => {
                this.onEdit(event);
                this.contactEdit.addEventListener('click', event => {
                    this.onSave(event, contact.data.id);
                })
            });
            
            contactRemove.addEventListener('click', event => {
                this.onRemove(event, contact.data.id);
            });
        });
        this.saveInStorage(data);
    }

    onAdd(event) {
        if (!event) return;
        
        const newContactName = this.newContactName.value;
        const newContactPhone = this.newContactPhone.value;
        const newContactEmail = this.newContactEmail.value;
        const newContactAddress = this.newContactAddress.value;
        
        const data = {
            name: newContactName || null,
            phone: newContactPhone || null,
            email: newContactEmail || null,
            address: newContactAddress || null
        }
        
        this.newContactName.value = '';
        this.newContactPhone.value = '';
        this.newContactEmail.value = '';
        this.newContactAddress.value = '';

        this.add(data);
        this.updateList();
    }

    onEdit(event) {
        this.contactName.setAttribute('contenteditable', true);
        this.contactPhone.setAttribute('contenteditable', true);
        this.contactEmail.setAttribute('contenteditable', true);
        //this.contactEmail.innerHTML = 'Email';
        this.contactAddress.setAttribute('contenteditable', true);
        //this.contactAddress.innerHTML = 'Address';
        this.contactEdit.innerHTML = 'Save';
        
        return event;
    }

    onSave(event, id) {
        console.log(id);
        event.target.setAttribute('contenteditable', false);
        this.contactEdit.innerHTML = 'Edit';

        const contactName = this.contactName.textContent;
        const contactPhone = this.contactPhone.textContent;
        const contactEmail = this.contactEmail.textContent;
        const contactAddress = this.contactAddress.textContent;
        
        const obj = {
            name: contactName || null,
            phone: contactPhone || null,
            email: contactEmail || null,
            address: contactAddress || null
        }

        this.edit(id, obj);
        this.updateList();
    }

    onRemove(event, id) {
        this.remove(id);
        this.updateList();
    }
}

new ContactsApp();