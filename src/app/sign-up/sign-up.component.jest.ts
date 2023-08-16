import { render, screen} from "@testing-library/angular"
import { SignUpComponent } from "./sign-up.component"
import  userEvent  from "@testing-library/user-event"

describe('SignUpComponent', () => {
    describe('Layout', () => {
        it('has sing up header', async () => {
            await render(SignUpComponent);
            const header = screen.getByRole('heading', {name: 'Sign Up'});
            expect(header).toBeInTheDocument();
        });

        it('has username input', async () => {
            await render(SignUpComponent);
            const input = screen.getByLabelText('Username');
            expect(input).toBeInTheDocument();
        });

        it('has email input', async () => {
            await render(SignUpComponent);
            const input = screen.getByLabelText('Email');
            expect(input).toBeInTheDocument();
        });

        it('has password input', async () => {
            await render(SignUpComponent);
            const input = screen.getByLabelText('Password');
            expect(input).toBeInTheDocument();
        });

        it('has password type for password input', async () => {
            await render(SignUpComponent);
            const input = screen.getByLabelText('Password');
            expect(input).toHaveAttribute('type','password');
        });
        
        it('has password type for password repeat input', async () => {
            await render(SignUpComponent);
            const input = screen.getByLabelText('Password Repeat');
            expect(input).toHaveAttribute('type','password');
        });

        it('has Sign Up button', async () => {
            await render(SignUpComponent);
            const button = screen.getByRole('button', {name: 'Sign Up'});
            expect(button).toBeDisabled();
        });

    })

    describe('Interactions', () => {
        it('enables sign up button when password and password repeat have same value', async () => {
            await render(SignUpComponent);
            const passwordInput = screen.getByLabelText('Password');
            const passwordRepeatInput = screen.getByLabelText('Password Repeat');
            await userEvent.type(passwordInput, 'P4ssword');
            await userEvent.type(passwordRepeatInput, 'P4ssword');
            const button = screen.getByRole('button', {name: 'Sign Up'});
            expect(button).toBeEnabled();
        });
    })
}) 
