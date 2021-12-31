import {Model, model, property} from '@loopback/repository';

@model()
export class ContactoUsuario extends Model {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: false,
  })
  emailPrueba: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;


  constructor(data?: Partial<ContactoUsuario>) {
    super(data);
  }
}

export interface ContactoUsuarioRelations {
  // describe navigational properties here
}

export type ContactoUsuarioWithRelations = ContactoUsuario & ContactoUsuarioRelations;
