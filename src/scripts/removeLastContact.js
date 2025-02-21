import { countContacts } from './countContacts.js';
import { getAllContacts } from './getAllContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const contactsLength = await countContacts();
  if (!contactsLength) {
    return;
  }

  const contacts = await getAllContacts();
  return await fs.writeFile(
    PATH_DB,
    JSON.stringify(contacts.slice(0, contactsLength - 1), null, 2),
    'utf-8',
  );
};

removeLastContact();
