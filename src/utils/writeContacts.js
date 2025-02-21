import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await readContacts();

    const contacts = JSON.parse(data);
    contacts.push(updatedContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    return updatedContacts;
  } catch (error) {
    console.log(error);
  }
};
