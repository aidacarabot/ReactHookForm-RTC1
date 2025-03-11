import { useForm } from 'react-hook-form'

const Form = () => {
  //Destructuring de todo lo que voy a usar de useForm():
  const { register, handleSubmit, formState: {errors}, watch } =useForm();

  //Función para recoger los datos y después pasarlos al form:
  const onSubmit = (data) => {
    console.log('Formulario Enviado:', data);
  }

  return (
    //Siempre pon esta línea al empezar un formulario:
    <form onSubmit={handleSubmit(onSubmit)}> 
      <h1>React Hook Form</h1>
      <label htmlFor='username'>Username:</label>
      <input
        {...register('username', {
          required: {
            value: true,
            message: 'Please use a username to continue'
          }, //Input Requerido
          maxLength: { value: 20, message: 'Maximum length is 20 characters' } //Debe ser menos de 20 caracteres
        })}
        type='text'
        id='username'
      />

      {/* Mensaje de Error */}
      {errors.username ? <p>{errors.username.message}</p> : null}

      <br />

      <label htmlFor='email'>Email:</label>
      <input
        {...register('email', {
          required: { value: true, message: 'Please enter your email' }, // Input requerido
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, //Asegura que el email ingresado tenga un formato válido (ejemplo@dominio.com). Patrón regex de email.
            message: 'Invalid email format' // Mensaje de error si el email no tiene un formato válido
          }
        })}
        type='email'
        id='email'
      />

      {/* Mensaje de Error */}
      {errors.email ? <p>{errors.email.message}</p> : null}

      <br />

      <label htmlFor='password'>Password:</label>
      <input 
        {...register("password", {
          required: "Password is required", //No hace falta poner value: true, ya que required ya asume que el valor debe estar presente.
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //Patrón regex de contraseña
            message: "Password must be at least 8 characters long and include at least 1 letter and 1 number",
          },
        })}
        type='password' 
        id='password' 
      />

      {/* Mensaje de Error */}
      {errors.password ? <p>{errors.password.message}</p> : null}

      <br />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form