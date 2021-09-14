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
        const formInput = document.querySelectorAll('.form__input');
        this.saveContact = document.querySelector('.form__save-button');
        this.contactList = document.querySelector('.contact-list');
        this.contactName = document.querySelector('.input__name');
        this.contactPhone = document.querySelector('.input__phone');
        this.contactEmail = document.querySelector('.input__email');
        this.contactAddress = document.querySelector('.input__address');
        
        addButtonContact.addEventListener('click', () =>
            contactForm.classList.add('active'),
        )
        addButtonContact.addEventListener('mouseup', () =>
            addButtonContact.classList.add('hidden')
        )
        this.saveContact.addEventListener('click', () =>
           contactForm.classList.remove('active') 
        )
        this.saveContact.addEventListener('mouseup', () =>
            addButtonContact.classList.remove('hidden')
        )
        this.saveContact.addEventListener('click', event => {
            this.onAdd(event);
        });   
    }
    
    updateList() {
        this.contactList.innerHTML = '';
        const data = this.get();
        data.forEach(contc => {
            const contactItem = document.createElement('li');
            const contactName = document.createElement('div');
            const contactPhone = document.createElement('div');
            const contactEmail = document.createElement('div');
            const contactAddress = document.createElement('div');
            const contactRemove = document.createElement('button');
            const contactEdit = document.createElement('button');

            contactItem.classList.add('contact-item');
            contactName.classList.add('contact-item_name');
            contactPhone.classList.add('contact-item_phone');
            contactEmail.classList.add('contact-item_email');
            contactAddress.classList.add('contact-item_address');
            contactRemove.classList.add('contact-item__remove');
            contactEdit.classList.add('contact-item__edit');

            contactRemove.innerHTML = 'Delete';
            contactEdit.innerHTML = 'Edit';

            if (contc.data.name) contactName.innerHTML = contc.data.name;
            if (contc.data.phone) contactPhone.innerHTML = contc.data.phone;
            if (contc.data.email) contactEmail.innerHTML = contc.data.email;
            if (contc.data.address) contactAddress.innerHTML = contc.data.address;

            this.contactList.append(contactItem);
            contactItem.append(contactName, contactPhone, contactEmail, contactAddress, contactEdit, contactRemove);

            contactEdit.addEventListener('click', event => {
                this.onEdit(event);
            });
            contactRemove.addEventListener('click', event => {
                this.onRemove(event);
            });
            
            this.onEdit(event, contc.data.id);
            this.onRemove(event, contc.data.id);
        });
    }

    onAdd(event) {
        if (!event) return;
        const contactName = this.contactName.value;
        const contactPhone = this.contactPhone.value;
        const contactEmail = this.contactEmail.value;
        const contactAddress = this.contactAddress.value;
        
        const data = {
            name: contactName || null,
            phone: contactPhone || null,
            email: contactEmail || null,
            address: contactAddress || null
        }
        
        
        
        this.contactName.value = '';
        this.contactPhone.value = '';
        this.contactEmail.value = '';
        this.contactAddress.value = '';

        this.add(data);
        this.updateList();
    }

    onEdit(event, id) {
        
    }

    onRemove(event, id) {
        this.remove(id);
        
        //this.updateList();
    }
}

new ContactsApp();