class User {
  constructor(name, isAdmin) {
    this.name = name
    this.isAdmin = isAdmin
  }
}

let users = [
  new User("Kyaw Gyi", false),
  new User("Aung Kyaw", true),
  new User("Foo Bar", false)
]

console.log(users.findIndex(user => user.isAdmin))
