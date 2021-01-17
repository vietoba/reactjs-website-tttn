import React from 'react'
import {  
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'> Cmedia </Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1> Đăng nhập tài khoản của bạn </FormH1>
                            <FormLabel htmlFor='for'> Email </FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'> mật khẩu </FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'> Tiếp tục </FormButton>
                            <Text> Quên mật khẩu </Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Signin ;
