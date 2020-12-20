import server from './server';

const { PORT: port = 4000 } = process.env;

const main = async (): Promise<void> => {
  await server.start({ port });
  console.log(`Rodando na porta ${port}`);
};

main().catch(console.log);
