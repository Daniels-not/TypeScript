import PropTypes from 'prop-types'
import React, { Component, SyntheticEvent } from 'react'
import { AuthServices } from '../services/AuthServices';
import { Button, Flex, Heading, Input, Text, Alert, AlertIcon, AlertDescription, CloseButton, useToast, Link, Box, FormControl, FormLabel, Stack, useColorModeValue, Image, Checkbox } from '@chakra-ui/react';
import { User } from '../models/Models';


interface ILoginProps {
    AuthServices: AuthServices;
    setUser: (user: User) => void;
}

interface ILoginState {
    userName: string;
    password: string;
    errorMessage: string;
    loginAttempted: boolean;
    loginSuccessful: boolean;
}

interface ICostumeLogin {
    target: HTMLInputElement;
}

export class Login extends Component<ILoginProps> {


    state: ILoginState = {
        userName: '',
        password: '',
        errorMessage: '',
        loginAttempted: false,
        loginSuccessful: false,
    }

    private setUserName(event: ICostumeLogin) {
      this.setState({
        userName: event.target.value
      });
    }

    private setPassword(event: ICostumeLogin) {
      this.setState({
        password: event.target.value
      })
    }

    private async handleSubmit(event: SyntheticEvent) {
      event.preventDefault();
      const results = await this.props.AuthServices.login(this.state.userName, this.state.password);
      if(results){
        console.log('Login successful');
        this.setState({
          loginSuccessful: true,
          errorMessage: ''
        });
        this.props.setUser(results);
      } else {
        console.log('Login failed');
        this.setState({
          errorMessage: 'Login failed',
          loginAttempted: true
        });
      }
    }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'} textAlign='center'>Sign in to your account 🐉</Heading>
                <FormControl id="email">
                  <FormLabel>User name</FormLabel>
                  <Input type="text" value={this.state.userName} onChange={(event => this.setUserName(event))}/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" value={this.state.password} onChange={(event => this.setPassword(event))}/>
                </FormControl>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.500'}>Forgot password?</Link>
                  </Stack>
                  <Button colorScheme={'blue'} variant={'solid'} type='submit'>
                    Sign in
                  </Button>
                    {this.state.errorMessage ?
                      <Alert status='error' mt={4}>
                        <AlertIcon />
                        <AlertDescription mr={2}>{this.state.errorMessage ? 'user name or password incorrect 😐' : ''}</AlertDescription>
                      </Alert>
                      : ''
                    }

                    {this.state.loginSuccessful ?
                      <Alert status='success' mt={4}>
                        <AlertIcon />
                        <AlertDescription mr={2}>{this.state.loginSuccessful ? 'Login successful 🐱‍👤' : ''}</AlertDescription>
                      </Alert>
                      : ''
                    }
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                }
              />
            </Flex>
          </Stack>
        </form>
      </div>
    )
  }
}

export default Login;