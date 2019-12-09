module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'sqlnode',
  define: {
    timestamps: true, // add fields create_at and updated_at
    underscored: true // name table and columns with: table_name
  }
}
