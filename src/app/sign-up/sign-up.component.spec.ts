import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('Layout', () => {
  it('has Sign Up header', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const h1 = signUp.querySelector('h1');
    expect(h1?.textContent).toEqual('Sign Up');
  })
  it('has username input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const label = signUp.querySelector('label[for="username"]');
    const input = signUp.querySelector('input[id="username"]');
    expect(input).toBeTruthy();
    expect(label).toBeTruthy(); 
    expect(label?.textContent).toContain('Username');
  })

  it('has email input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const label = signUp.querySelector('label[for="email"]');
    const input = signUp.querySelector('input[id="email"]');
    expect(input).toBeTruthy();
    expect(label).toBeTruthy(); 
    expect(label?.textContent).toContain('Email');
  })
  it('has password input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const label = signUp.querySelector('label[for="password"]');
    const input = signUp.querySelector('input[id="password"]');
    expect(input).toBeTruthy();
    expect(label).toBeTruthy(); 
    expect(label?.textContent).toContain('Password');
  })
  it('has password type for password input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const input = signUp.querySelector('input[id="password"]') as HTMLInputElement;
    expect(input.type).toBe('password');
  })

  it('has password repeat input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const label = signUp.querySelector('label[for="passwordRepeat"]');
    const input = signUp.querySelector('input[id="passwordRepeat"]');
    expect(input).toBeTruthy();
    expect(label).toBeTruthy(); 
    expect(label?.textContent).toContain('Password Repeat');
  })
  it('has password type for password repeat input', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const input = signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;
    expect(input.type).toBe('password');
  })

  it('has Sign Up button', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const button = signUp.querySelector('button');
    expect(button?.textContent).toEqual('Sign Up');
  })

  it('disables the button initially', () => {
    const signUp = fixture.nativeElement as HTMLElement;
    const button = signUp.querySelector('button');
    expect(button?.disabled).toBeTruthy();
    })
  })

  describe('Interaction', () => {
    it('enables the button when password and password repeat match', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const password = signUp.querySelector('input[id="password"]') as HTMLInputElement;
      const passwordRepeat = signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;
      password.value = 'P4ssword';
      password.dispatchEvent(new Event('input'));
      passwordRepeat.value = 'P4ssword';
      passwordRepeat.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const button = signUp.querySelector('button');
      expect(button?.disabled).toBeFalsy();
    })

    it('sends username, email and password to backend after clicking the button', () => {
      const spy = spyOn(window, 'fetch').and.returnValue(Promise.resolve({}));
      let httpTestingController = TestBed.inject(HttpTestingController);
      const signUp = fixture.nativeElement as HTMLElement;
      const usernameInput = signUp.querySelector('input[id="username"]') as HTMLInputElement;
      const emailInput = signUp.querySelector('input[id="email"]') as HTMLInputElement;
      const password = signUp.querySelector('input[id="password"]') as HTMLInputElement;
      const passwordRepeat = signUp.querySelector('input[id="passwordRepeat"]') as HTMLInputElement;

      usernameInput.value = 'user1';
      usernameInput.dispatchEvent(new Event('input'));
      emailInput.value = 'user1@mail.com';
      emailInput.dispatchEvent(new Event('input'));

      password.value = 'P4ssword';
      password.dispatchEvent(new Event('input'));
      passwordRepeat.value = 'P4ssword';
      passwordRepeat.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const button = signUp.querySelector('button');
      button?.click();
      const req = httpTestingController.expectOne('api/users');
      const requestBody = req.request.body;
      expect(requestBody).toEqual({
        username: 'user1',
        password: 'P4ssword',
        email: 'user1@email.com'
        }); 
      expect(button?.disabled).toBeFalsy();
    })
  });
});