import { render, screen} from "@testing-library/angular"
import { SignUpComponent } from "./sign-up.component"
import  userEvent  from "@testing-library/user-event"
import 'whatwg-fetch';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

const setUp = async () => {
   await render(SignUpComponent, {
        imports: [HttpClientTestingModule],
    });    
}
describe('SignUpComponent', () => {
    describe('Layout', () => {
        it('has sing up header', async () => {
            await setUp();
            const header = screen.getByRole('heading', {name: 'Sign Up'});
            expect(header).toBeInTheDocument();
        });

        it('has username input', async () => {
            await setUp();
            const input = screen.getByLabelText('Username');
            expect(input).toBeInTheDocument();
        });

        it('has email input', async () => {
            await setUp();
            const input = screen.getByLabelText('Email');
            expect(input).toBeInTheDocument();
        });

        it('has password input', async () => {
            await setUp();
            const input = screen.getByLabelText('Password');
            expect(input).toBeInTheDocument();
        });

        it('has password type for password input', async () => {
            await setUp();
            const input = screen.getByLabelText('Password');
            expect(input).toHaveAttribute('type','password');
        });
        
        it('has password type for password repeat input', async () => {
            await setUp();
            const input = screen.getByLabelText('Password Repeat');
            expect(input).toHaveAttribute('type','password');
        });

        it('has Sign Up button', async () => {
            await setUp();
            const button = screen.getByRole('button', {name: 'Sign Up'});
            expect(button).toBeInTheDocument();
        });

    })

    describe('Interactions', () => {
        it('enables sign up button when password and password repeat have same value', async () => {
            await setUp();
            const passwordInput = screen.getByLabelText('Password');
            const passwordRepeatInput = screen.getByLabelText('Password Repeat');
            await userEvent.type(passwordInput, 'P4ssword');
            await userEvent.type(passwordRepeatInput, 'P4ssword');
            const button = screen.getByRole('button', {name: 'Sign Up'});
            expect(button).toBeEnabled();
        });

        // it('sends username, email and password to backend after clicking the button', async () => {
        //     await setUp();
        //     let httpTestingController = TestBed.inject(HttpTestingController);
        //     const passwordInput = screen.getByLabelText('Password');
        //     const passwordRepeatInput = screen.getByLabelText('Password Repeat');
        //     const usernameInput = screen.getByLabelText('Username');
        //     const emailInput = screen.getByLabelText('Email');
        //     await userEvent.type(passwordInput, 'P4ssword');
        //     await userEvent.type(passwordRepeatInput, 'P4ssword');
        //     await userEvent.type(usernameInput, 'user1');
        //     await userEvent.type(emailInput, 'user1@mail.com');
        //     const button = screen.getByRole('button', {name: 'Sign Up'});
        //     await userEvent.click(button);
        //     const req = httpTestingController.expectOne('api/users');
        //     const requestBody = req.request.body;
        //     expect(requestBody)
        //     .toEqual(
        //         {
        //         username: 'user1',
        //         email: 'user1@mail.com',
        //         password: 'P4ssword',
        //         }
        //     )
        // })
    }) 

    // describe('Validations', () => {
    //     it.each`
    //     field         | message
    //     ${'Username'} | ${'Username is required'}
    //     ${'Email'}    | ${'Email is required'}
    //     `('displays $message when $field is clicked', async ({field, message}) => {
    //         await setUp();
    //         expect(screen.queryByText(message)).not.toBeInTheDocument();
    //         const input = screen.getByLabelText(field);
    //         await userEvent.click(input);
    //         await userEvent.tab();
    //         expect(screen.queryByText(message)).toBeInTheDocument();
    //     });
    // })
})

