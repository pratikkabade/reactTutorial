import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("fill the name"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Full Name' {...register('fullName')} />
            <p>{errors.fullName?.message}</p>
            <input type="email" placeholder='Email' {...register('email')} />
            <p>{errors.email?.message}</p>
            <input type="number" placeholder='Age' {...register('age')} />
            <p>{errors.age?.message}</p>
            <input type="Password" placeholder='Password' {...register('password')} />
            <p>{errors.password?.message}</p>
            <input type="Password" placeholder='Confirm Password' {...register('confirmPassword')} />
            <p>{errors.confirmPassword?.message}</p>
            <button>Submit</button>
        </form>
    )
}