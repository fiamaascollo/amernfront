import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Formulario = () =>{

    const URL = process.env.REACT_APP_URL;

    const {register, handleSubmit, reset, formState: {errors} } = useForm({
        defaultValues: {
            nombre:'',
            apellido:'',
            email: '',
            password: ''
        }
    });

    const onSubmit = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL, datos)
            e.target.reset();
            /* Swal.fire({
                title: 'Welcome!',
                text: 'Tu usuario ha sido creado',
                icon: 'success',
                confirmButtonText: 'Cool'
            }) */
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="App">
            <h1 class='titulo'>Formulario de registro</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Nombre: </label>
                    <input 
                        placeholder='Nombre' 
                        type='text'
                        name='nombre'
                        {...register('nombre',
                            {
                                required: true,
                                maxLength: 30
                            })}
                    />
                </Form.Field>
                {errors.nombre && <p className='errores'>El nombre es obligatorio y tiene un máximo de 50 caracteres.</p>}

                <Form.Field>
                    <label>Apellido: </label>
                    <input 
                        placeholder='Apellido' 
                        type='text'
                        name='apellido'
                        {...register('apellido',
                            {
                                required: true,
                                maxLength: 30
                            })}
                    />
                </Form.Field>
                {errors.apellido && <p className='errores'>El apellido es obligatorio y tiene un máximo de 30 caracteres.</p>}

                <Form.Field>
                    <label>Email: </label>
                    <input 
                        placeholder='Email' 
                        type='email'
                        name='email'
                        {...register('email',
                            {
                                required: true,
                                //pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p className='errores'>El email es obligatorio.</p>}

                <Form.Field>
                    <label>Password: </label>
                    <input 
                        placeholder='De 6 a 10 caracteres' 
                        type='password'
                        name='password'
                        {...register('password',
                            {
                                required: true,
                                //pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/
                            })}
                    />
                </Form.Field>
                {errors.password && <p className='errores'>La contraseña debe contener una mayúscula, una minúscula y entre 6 y 10 caracteres.</p>}

                <div className='centrar'>
                
                    <Button.Group>
                        <Button type='button' onClick={() => reset()} primary>Limpiar formulario</Button>
                        <Button.Or />
                        <Button type='submit' positive>Enviar datos</Button>
                    </Button.Group>

                    {/* <Button type='submit'> Enviar datos </Button>
                    <Button type='button' onClick={() => reset()}> Limpiar formulario </Button> */}
                
                </div>
            </Form>
        </div>
    )
}

export default Formulario;

