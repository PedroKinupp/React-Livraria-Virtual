import { useForm } from 'react-hook-form'
import styles from './styles.module.css'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const userSchema = z.object({
    email: z.string().nonempty('O e-mail não pode ser vazio').refine(value => z.string().email().safeParse(value).success, {
        message: 'E-mail não é válido'
    }),
    password: z.string().nonempty('A senha não pode ser vazia').min(6, 'Senha deve haver no mínimo 6 caracteres')
})

type User = z.infer<typeof userSchema>

export default function Form(){
    const { register, handleSubmit, formState: { errors, isSubmitting }} =useForm<User>({
        resolver: zodResolver(userSchema)
    })

    const navigate = useNavigate()

    async function login(){
        await new Promise(resolve => setTimeout(resolve, 1000))
        navigate('/Home')
    }
    return(
        <form onSubmit={handleSubmit(login)} className={styles.form}>
            <div className={styles.container}>
                <div>
                    <label>E-mail</label>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder='Digite aqui seu e-mail...'
                        {...register('email')}
                    />  
                    {errors.email && <span> {errors.email.message} </span>}  
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        type='password'
                        className={styles.input}
                        placeholder='Digite aqui sua senha...'
                        {...register('password')}
                    /> 
                    {errors.password && <span> {errors.password.message} </span>}
                </div>
            </div>
            <div className={styles.container}>
                <button className={styles.Login} disabled={isSubmitting}>{isSubmitting ? 'Carregando...' : 'Entrar'}</button>
                <button className={styles.Register} disabled={isSubmitting}>Cadastrar-se</button>
            </div>
        </form>
    )
}