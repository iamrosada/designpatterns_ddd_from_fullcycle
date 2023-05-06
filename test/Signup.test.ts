test("Deve fazer o signup", async function () {
  //given, when, then- arrange, act, assert

  const userRepository = new UserRepositoryMemory();

  //given
  const signup = new Signup(userRepository);
  const inputSignup = {
    name: "Luis Rosada",
    email: "luis@test.com",
    password: "123456",
    age: 30,
  };
  //when
  await signup.execute(inputSignup);

  //then
  const login = new Login(userRepository);

  const inputLogin = {
    email: "luis@test.com",
    password: "123456",
  };

  const output = await login.execute(inputLogin);
  //Eu espero que !
  expect(output.name).toBe("Luis Rosada");
  expect(output.token).toBe("123456");
});
