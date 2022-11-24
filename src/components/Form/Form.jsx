import React from "react";
import { Navigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import classes from './Form.module.css';

const Form = (props) => {

    const {
        control,
        reset,
        handleSubmit,
    } = useForm({
        mode: 'onBlur'
    });

    let onSubmit = ({ login, password }) => {
        props.loginUser(login, password);
        reset();
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    } else {
        return (
            <div className={classes.formContainer}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.form}
                >
                    <Controller
                        defaultValue={''}
                        control={control}
                        name='login'
                        rules={{
                            required: 'Поле обязательно к заполнению',
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                label='Логин'
                                margin="normal"
                                fullWidth
                                error={!!error}
                                helperText={error?.message}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        defaultValue={''}
                        control={control}
                        name='password'
                        rules={{
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 8,
                                message: 'Пароль должен содержать не менее 8 символов'
                            }
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                label='Пароль'
                                type='password'
                                margin="normal"
                                fullWidth
                                error={!!error}
                                helperText={error?.message}
                                {...field}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 2
                        }}
                    >
                        Войти
                    </Button>
                </form>
            </div>
        )
    }
}

export default Form;