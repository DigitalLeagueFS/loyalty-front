import React from 'react'
import { useForm } from 'react-hook-form'
import api from "../../../services/api";


export default function NewUser() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {
        (async function creatUser() {
            let res = await api.users.create(data);
            console.log(res.data);
            if(res.data.id){
                window.location.href = '/users';
            }
        })();
    }

    return (
        <>
            <h1>New User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name *</label>
                <input name="name" ref={register({ required: true })} />
                {errors.name && <span>This field is required</span>}
                <br/>

                <label htmlFor="email">Email *</label>
                <input name="email" ref={register({ required: true })} />
                {errors.email && <span>This field is required</span>}
                <br/>

                <label htmlFor="balance">Balance *</label>
                <input name="balance" type={'number'} ref={register({ required: true })} />
                {errors.balance && <span>This field is required</span>}
                <br/>


                <input type="submit" />
            </form>
        </>
    )
}
