import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Login} from './login.model';
import {Role} from './role.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstSurname: string;

  @property({
    type: 'string',
  })
  lastSurname?: string;

  @property({
    type: 'string',
    required: true,
  })
  document: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
  })
  photo?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  token?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  confirmed?: boolean;

  @hasMany(() => Login)
  logins: Login[];

  @belongsTo(() => Role)
  roleId: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
