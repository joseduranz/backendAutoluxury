import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, HttpErrors, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Llaves} from '../config/llaves';
import {ContactoUsuario, Credenciales, Persona} from '../models';
import {PersonaRepository} from '../repositories';
import {AutenticacionService} from '../services';
const fetch = require("node-fetch");


export class PersonaController {
  constructor(
    @repository(PersonaRepository)
    public personaRepository: PersonaRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService,
  ) { }


  //==================================================================
  //CONTACTACTO POR USUARIO

  @post("/contactoPersona", {
    responses: {
      '200': {
        description: "envio de correo"
      }
    }
  })
  async envioCorreo(
    @requestBody() contactoUsuario: ContactoUsuario) {
    let destino = contactoUsuario.emailPrueba;
    //let destino = "alfonso83@misena.edu.co"
    let asunto = "Contactar Usuario";
    let contenido =
      `El usuario: ${contactoUsuario.nombre}, ha solicitado ser contactado, <br><br>

      _________________________________________________________________ <br><br>

      sus datos son los siguientes  <br>

      Nombre: <br>
            ${contactoUsuario.nombre}, <br>
      E-mail: <br>
            ${contactoUsuario.email}, <br>
      Telefono: <br>
              ${contactoUsuario.telefono}, <br>
      Asunto: <br>
            ${contactoUsuario.mensaje}
      `;

    //notificacion al celular funcional pero solo es para hacer pruebas por que el saldo se descuenta
    let numeroDestino = 3005192727;

    // fetch(`${Llaves.urlServicioNotificaciones}/sms?mensaje=${contenido}&telefono=${numeroDestino}`)
    //   .then((data: any) => {
    //     console.log(data);
    //   });


    fetch(`${Llaves.urlServicioNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data: any) => {
        //console.log(data);
      });
  }


  //==================================================================
  //INICIAR SESION

  @post("/identificarPersona", {
    responses: {
      '200': {
        description: "identificación de usuario"
      }
    }
  })
  async identificarPersona(
    @requestBody() credenciales: Credenciales) { // importante importar la clase de credenciales desde modelo
    let personaBuscada = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.clave);
    if (personaBuscada) {
      let token = this.servicioAutenticacion.GenerarTokenJWT(personaBuscada);

      return {

        datos: {
          nombre: personaBuscada.nombres,
          correo: personaBuscada.correoElectronico,
          id: personaBuscada.id,
          rol: personaBuscada.rol,
        },
        tk: token
      }
    } else {
      throw new HttpErrors[401]("Los datos suministrados no son validos");
    }
  }

  //==================================================================
  //CAMBIAR CONTRASEÑA

  @post("/cambiarClave", {
    responses: {
      '200': {
        description: "cambio de clave"
      }
    }
  })
  async cambiarClave(
    @requestBody() credenciales: Credenciales) { // importante importar la clase de credenciales desde modelo
    let personaBuscada = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.clave);
    if (personaBuscada) {
      let token = this.servicioAutenticacion.GenerarTokenJWT(personaBuscada);
      return {
        datos: {
          nombre: personaBuscada.nombres,
          correo: personaBuscada.correoElectronico,
          id: personaBuscada.id,
          rol: personaBuscada.rol,
        },
        tk: token
      }
    } else {
      throw new HttpErrors[401]("Los datos suministrados no son validos");
    }
  }


  //==================================================================
  //RECUPERAR CONTRASEÑA

  @post("/recuperarClave", {
    responses: {
      '200': {
        description: "recuperar contraseña"
      }
    }
  })
  async recuperarClave(
    @requestBody() persona: Persona) {


    let claveGenerada = this.servicioAutenticacion.GenerarClave();
    let claveCifrada = this.servicioAutenticacion.cifrarClave(claveGenerada);
    persona.contrasena = claveCifrada;
    let objetoPersona = await this.personaRepository.updateById(persona.id, persona);

    let destino = persona.correoElectronico;
    let asunto = "Recuperar Clave";
    let contenido = `Hola, ${persona.nombres} ${persona.apellidos}, <br><br> esta es su nueva contraseña, <br>
    ya puedes iniciar sesión en nuestra páguina Bienvenido nuevamente <br><br>

    su nombre de usuario es: ${persona.correoElectronico},<br>
    y su nueva contraseña de acceso es "${claveGenerada}<br><br><br>


    https://autoluxury.herokuapp.com/seguridad/login
    `;

    //notificacion al celular funcional pero solo es para hacer pruebas por que el saldo se descuenta
    let numeroDestino = 3005192727;

    // fetch(`${Llaves.urlServicioNotificaciones}/sms?mensaje=${contenido}&telefono=${numeroDestino}`)
    //   .then((data: any) => {
    //     console.log(data);
    //   });


    fetch(`${Llaves.urlServicioNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data: any) => {
        //console.log(data);
      });
    return objetoPersona;
  }



  //==================================================================
  //REGISTRAR PERSONA

  @post('/personas')
  @response(200, {
    description: 'Persona model instance',
    content: {'application/json': {schema: getModelSchemaRef(Persona)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {
            title: 'NewPersona',
            exclude: ['id'],
          }),
        },
      },
    })
    persona: Omit<Persona, 'id'>,
  ): Promise<Persona> {

    let claveGenerada = this.servicioAutenticacion.GenerarClave();
    let claveCifrada = this.servicioAutenticacion.cifrarClave(claveGenerada);
    persona.contrasena = claveCifrada;

    let objetoPersona = await this.personaRepository.create(persona);

    //notificación a usuario unificado con spyder(python)
    let destino = persona.correoElectronico;
    let asunto = "Registro en AUTOLUXURY";
    let contenido = `Hola, ${persona.nombres} ${persona.apellidos}, <br><br> ya puedes hacer uso de nuestros servicios, <br>
    para comenzar, inicia sesión en nuestra páguina con los siguientes datos <br><br>

    su nombre de usuario es: ${persona.correoElectronico},<br>
    y la contraseña de acceso es "${claveGenerada}<br><br><br>


    https://autoluxury.herokuapp.com/seguridad/login
    `; //Backtick alt + 96

    //notificacion al celular funcional pero solo es para hacer pruebas por que el saldo se descuenta
    let numeroDestino = persona.celular;

    // fetch(`${Llaves.urlServicioNotificaciones}/sms?mensaje=${contenido}&telefono=${numeroDestino}`)
    //   .then((data: any) => {
    //     console.log(data);
    //   });


    fetch(`${Llaves.urlServicioNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data: any) => {
        console.log(data);
      });


    return objetoPersona;
  }


  //==================================================================
  //NUMERO DE USUARIOS REGISTRADOS

  @get('/personas/count')
  @response(200, {
    description: 'Persona model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Persona) where?: Where<Persona>,
  ): Promise<Count> {
    return this.personaRepository.count(where);
  }

  //==================================================================
  //LISTADO DE USUARIOS

  @get('/personas')
  @response(200, {
    description: 'Array of Persona model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Persona, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Persona) filter?: Filter<Persona>,
  ): Promise<Persona[]> {
    return this.personaRepository.find(filter);
  }

  //==================================================================
  //ACTUALIZAR USUARIO

  @patch('/personas')
  @response(200, {
    description: 'Persona PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Persona,
    @param.where(Persona) where?: Where<Persona>,
  ): Promise<Count> {
    return this.personaRepository.updateAll(persona, where);
  }


  //==================================================================
  //USUARIO CON ID
  @get('/personas/{id}')
  @response(200, {
    description: 'Persona model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Persona, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Persona, {exclude: 'where'}) filter?: FilterExcludingWhere<Persona>
  ): Promise<Persona> {
    return this.personaRepository.findById(id, filter);
  }

  @patch('/personas/{id}')
  @response(204, {
    description: 'Persona PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Persona,
  ): Promise<void> {
    await this.personaRepository.updateById(id, persona);
  }

  @put('/personas/{id}')
  @response(204, {
    description: 'Persona PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() persona: Persona,
  ): Promise<void> {
    await this.personaRepository.replaceById(id, persona);
  }

  @del('/personas/{id}')
  @response(204, {
    description: 'Persona DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.personaRepository.deleteById(id);
  }
}
