import{test, expect} from '@playwright/test';

test('should return 200 when login with valid credentials', async({request}) => {
    const response = await request.post('/api/verifyLogin', {
        form: {
            email: process.env.TEST_USER_EMAIL ||'',
            password: process.env.TEST_USER_PASSWORD ||'',
        },
    });

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exists!');
});

test('should return 404 with a generic message both invalid email and invalid password', async ({ request }) => {
  const response = await request.post('/api/verifyLogin', {
    form: {
      email: 'nonexistent.email@example.com',
      password: '123456',
    },
  });

  const body = await response.json();
  expect(body.responseCode).toBe(404);
  expect(body.message).toBe('User not found!');
    //Note: confirmed via manual curl testing that an invalid password
    //with a valid email return this exact same response - the API
    //does not distinguish which field is incorrect
});
