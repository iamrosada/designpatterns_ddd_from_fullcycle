import UserRepository from "../repository/UserRepository";

export default class Login {
  constructor(readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<Output> {}
}

type Input = {
  email: string;
  password: string;
};
