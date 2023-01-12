module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceu5cbla4990mi8s4ljg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_2i8j'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'vhIWnP5sofAnJmg8K9TYz7bhCWJNePFW'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
