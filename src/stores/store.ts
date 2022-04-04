import { Writable, writable } from 'svelte/store';
import faker from '@faker-js/faker';

export type Сompanion = {
  id: number;
  name: string;
  avatarUrl: string;
};

export type Dialogue = {
  id: number;
  name: string;
  companion: Сompanion;
  dialogLastMessage: Message;
};

export type Message = {
  id: number | null;
  content: string;
  from: Сompanion;
  dateTime: Date;
};

export enum MessageType {
  incoming = 'incoming',
  outgoing = 'outgoing',
}

const generateMockDialogs = () => {
  let dialogues: Array<Dialogue> = [];

  for (let i = 0; i < 20; i++) {
    dialogues.push({
      id: i,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      companion: {
        id: i,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatarUrl: faker.image.avatar(),
      },
      dialogLastMessage: {
        id: i,
        content: faker.lorem.text(),
        from: {
          id: i,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl: faker.image.avatar(),
        },
        dateTime: faker.date.recent(),
      },
    });
  }

  return dialogues;
};

export const generateMockMessages = () => {
  let messages: Array<Message> = [];

  for (let i = 0; i < 50; i++) {
    messages.push({
      id: i,
      content: faker.lorem.paragraph(),
      from: {
        id: i <= 25 ? 1 : 2,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatarUrl: faker.image.avatar(),
      },
      dateTime: faker.date.recent(),
    });
  }

  return messages;
};

export const genereateMockCompanion = (): Сompanion => {
  return {
    id: faker.datatype.number(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatarUrl: faker.image.avatar(),
  };
};

const mockDialogs: Array<Dialogue> = generateMockDialogs();
const mockMessages: Array<Message> = generateMockMessages();

export const dialogues: Writable<Array<Dialogue>> = writable(mockDialogs);
export const messages: Writable<Array<Message>> = writable(mockMessages);
