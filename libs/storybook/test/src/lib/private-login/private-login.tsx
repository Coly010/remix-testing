import {
  BuildingOffice2Icon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Input,
  SectionTitle,
  Spinner,
} from '@remix-testing/nx-cloud/ui-primitives';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';

const accessTokenSchema = object({
  username: string().required('Username is required to continue.'),
  password: string().required('Password is required to continue.'),
});
type FormData = InferType<typeof accessTokenSchema>;
export function PrivateLogin({
                               errorMessage,
                               hasSocialLogin,
                               isLoading,
                               handleSave,
                               handleSocialLogin,
                             }: {
  errorMessage: string;
  hasSocialLogin: boolean;
  isLoading: boolean;
  handleSave: (data: { username: string; password: string }) => void;
  handleSocialLogin: () => void;
}): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { username: '', password: '' },
    resolver: yupResolver(accessTokenSchema),
  });

  function onSubmit(data, e): void {
    // e.target.reset(); // reset after form submit
    handleSave(data);
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <svg
            id="nx-cloud-header-logo"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="transparent"
            viewBox="0 0 24 24"
            className="mx-auto h-12 w-12"
          >
            <path
              strokeWidth="2"
              d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
              id="nx-cloud-header-logo-stroke-1"
            />
            <path
              strokeWidth="2"
              d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
              id="nx-cloud-header-logo-stroke-2"
            />
          </svg>
          <SectionTitle className="mt-6 text-center">
            Sign in to your account
          </SectionTitle>
          <p className="mt-2 text-center text-sm text-slate-600">
            You will be able to manage Nx Cloud for your organization, see runs
            and access analytics.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-cy="private-login-simple-auth"
          className="mt-8 space-y-6"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <Input
                id="username"
                type="text"
                {...register('username')}
                autoComplete="username"
                className="relative block w-full rounded-none rounded-t-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Username"
                ariaDescribedby={errors.username ? 'username-error' : ''}
                hasError={!!errors.username}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                autoComplete="current-password"
                className="relative block w-full rounded-none rounded-b-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                ariaDescribedby={errors.password ? 'password-error' : ''}
                hasError={!!errors.password}
              />
            </div>
          </div>

          {errors.username && (
            <p id="username-error" className="mt-2 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
          {errors.password && (
            <p id="password-error" className="mt-2 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
          {errorMessage && (
            <p id="general-error" className="mt-2 text-sm text-red-600">
              {errorMessage}
            </p>
          )}

          {/* TODO: Private cloud: implement rememberMe & Forgot your password features. */}
          {/*<div className="flex items-center justify-between">*/}
          {/*  <div className="flex items-center">*/}
          {/*    <input*/}
          {/*      id="remember-me"*/}
          {/*      name="remember-me"*/}
          {/*      type="checkbox"*/}
          {/*      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"*/}
          {/*    />*/}
          {/*    <label*/}
          {/*      htmlFor="remember-me"*/}
          {/*      className="ml-2 block text-sm text-slate-900"*/}
          {/*    >*/}
          {/*      Remember me*/}
          {/*    </label>*/}
          {/*  </div>*/}

          {/*  <div className="text-sm">*/}
          {/*    <a*/}
          {/*      href="#"*/}
          {/*      className="font-medium text-blue-600 hover:text-blue-500"*/}
          {/*    >*/}
          {/*      Forgot your password?*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div>
            <Button
              variant="primary"
              size="default"
              type="submit"
              disabled={isLoading}
              className="flex w-full space-x-4"
            >
              {isLoading ? (
                <Spinner className="-ml-1 mr-3 h-4 w-4 animate-spin" />
              ) : (
                <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
              )}
              <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
            </Button>
          </div>

          {hasSocialLogin && (
            <>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div>
                <Button
                  variant="secondary"
                  size="default"
                  type="button"
                  onClick={handleSocialLogin}
                  className="flex w-full space-x-4"
                >
                  <BuildingOffice2Icon className="h-5 w-5" aria-hidden="true" />
                  <span>Sign In with configured third-party provider</span>
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
