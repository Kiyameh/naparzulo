// Esquema de datos de authentificación para validación back-end con Zod. 

import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string({
    required_error: '<Zod> Usuario requerido',
  }),
  email: z
  .string({
    required_error: '<Zod> Email requerido',
  })
  .email({
    message: '<Zod> Email no valido',
  }),
  password: z
  .string({
    required_error: '<Zod> Contraseña requerida',
  })
  .min(6, { message: '<Zod> La contraseña debe de tener al menos 6 caracteres' }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: '<Zod> Email requerido',
    })
    .email({
      message: '<Zod> Email incorrecto',
    }),
  password: z
    .string({
      required_error: '<Zod> Contraseña requerida',
    })
    .min(6, { message: '<Zod> La contraseña debe de tener al menos 6 caracteres' }),
});
